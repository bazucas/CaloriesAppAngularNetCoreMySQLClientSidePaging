import { AuthService } from './../_services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { MealService } from '../_services/meal.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-listmeals',
  templateUrl: './listmeals.component.html',
  styleUrls: ['./listmeals.component.css']
})

export class ListMealsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['description', 'calories', 'added', 'options'];
  dataSource;
  userId: string;

  constructor(private mealService: MealService,
    private authService: AuthService,
    private alertify: AlertifyService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.authService.decodedToken.nameid;
    this.getAllMeals(this.userId);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAllMeals(mealId: string) {
    this.mealService.getMeals(mealId).subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(<any>data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, error => {
      this.alertify.error('Failed to get all users');
    });
  }

  updateMeal(userId: string, mealId: string) {
    console.log('Implement delete functionality here');
  }

  deleteMeal(userId: string, mealId: string, description: string) {
    if (confirm('Are you sure you want to delete the meal ' + description + '?')) {
      this.mealService.DeleteMeal(userId, mealId).subscribe(data => {
        this.alertify.success('Meal ' + description + ' successfuly deleted');
        this.getAllMeals(this.userId);
      }, error => {
        this.alertify.error('Failed to delete meal ' + description);
      });
    }
  }
}
