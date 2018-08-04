import { Meals } from './../_models/Meals';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';

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
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['description', 'cal', 'date', 'time', 'options'];
  dataSource = new MatTableDataSource<Meals>(MEAL_DATA);

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  alertt(val: string) {
    alert(val);
  }
}
