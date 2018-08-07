import { Injectable } from '@angular/core';
import { Meal } from '../_models/Meal';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  addMeal(userId: string, meal: Meal) {
    return this.http.post(this.baseUrl + 'users/' + userId + '/meals/', meal);
  }

  UpdateMeal(userId: string, meal: Meal) {
    return this.http.put(this.baseUrl + 'users/' + userId + '/meals/', meal);
  }

  DeleteMeal(userId: string, mealId: string) {
    return this.http.delete(this.baseUrl + 'users/' + userId + '/meals/' + mealId);
  }

  getMeals(userId: string) {
    return this.http.get(this.baseUrl + 'users/' + userId + '/meals/');
  }

  getMeal(userId: string, mealId: string) {
    return this.http.get(this.baseUrl + 'users/' + userId + '/meals/' + mealId);
  }
}
