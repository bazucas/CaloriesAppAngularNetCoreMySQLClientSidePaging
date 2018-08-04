import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from '../_models/Meal';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-addmeal',
  templateUrl: './addmeal.component.html',
  styleUrls: ['./addmeal.component.css']
})
export class AddMealComponent implements OnInit {
  model: Meal = {description: '', cal: 0, date: '', time: ''};
  mealAdded: boolean;
  userId: string;

  constructor(public userService: UserService,
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
    this.userId = this.authService.decodedToken.id;
  }

  addMeal() {
    this.userService.addMeal(this.userId, this.model).subscribe(data => {
      this.alertify.success('Logged in successfully');
    }, error => {
      this.alertify.error('Failed to add meal');
    }, () => {
      this.mealAdded = true;
    });
  }
}
