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

  addMeal(id: string, meal: Meal) {
    return this.http.post(this.baseUrl + 'meals/' + id, meal);
  }

}
