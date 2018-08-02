import { Meals } from './../_models/Meals';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import { validateVerticalPosition } from '../../../node_modules/@angular/cdk/overlay';
import {HttpClient} from '@angular/common/http';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

const MEAL_DATA: Meals[] = [
  {id: 1, description: 'Cozido à Portuguesa', cal: 800, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString()},
  {id: 2, description: 'Hambúrguer', cal: 600, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString()},
  {id: 3, description: 'Salada Cesar', cal: 200, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString()},
  {id: 4, description: 'Hot Dog', cal: 400, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString()},
  {id: 5, description: 'Pizza', cal: 700, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString()},
  {id: 6, description: 'Arroz de pato', cal: 400, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString()},
  {id: 7, description: 'Perna de perú assada', cal: 600, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString()},
  {id: 8, description: 'Coelho à caçador', cal: 500, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString()},
  {id: 9, description: 'Bucha', cal: 9999, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString()}
];

@Component({
  selector: 'app-listmeals',
  templateUrl: './listmeals.component.html',
  styleUrls: ['./listmeals.component.css']
})

export class ListMealsComponent implements OnInit {
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  // displayedColumns: string[] = ['description', 'cal', 'date', 'time', 'options'];
  // dataSource = new MatTableDataSource<Meals>(MEAL_DATA);

  // constructor() { }

  // ngOnInit() {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  // }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  // alertt(val: string) {
  //   alert(val);
  // }

  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  exampleDatabase: ExampleHttpDao | null;
  data: GithubIssue[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.exampleDatabase = new ExampleHttpDao(this.http);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase.getRepoIssues(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
  }
}







export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDao {
  constructor(private http: HttpClient) {}

  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
        `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;

    return this.http.get<GithubApi>(requestUrl);
  }
}
