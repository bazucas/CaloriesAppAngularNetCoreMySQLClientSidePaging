import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from '../_models/meal';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  calories: Number;
  dailyIntake: Number;
  loggedIn: boolean;

  constructor(public authService: AuthService,
              private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn();
    this.calories = this.authService.currentUser.calories;
    this.dailyIntake = this.calculateIntake(this.authService.currentUser.meals);
    debugger;
  }

  calculateIntake(meals: Meal[]) {
    let sumCalories = 0;
    meals.forEach(meal => {
      sumCalories += meal.calories
    });
    return sumCalories;
  }

  getStyle() {
    if ( this.dailyIntake > this.calories)
      return "red"
    else
      return "green"
  }

  login() {
    this.authService.login(this.model).subscribe(data => {
      this.alertify.success('Logged in successfully');
    }, error => {
      this.alertify.error('Failed to login');
    }, () => {
      this.router.navigate(['/home']);
    });
  }

  logout() {
    this.authService.userToken = null;
    this.authService.currentUser = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }
}
