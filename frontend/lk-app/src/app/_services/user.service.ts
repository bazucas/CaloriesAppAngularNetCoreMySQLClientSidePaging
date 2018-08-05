import { Injectable } from '@angular/core';
import { Meal } from '../_models/Meal';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Contact } from '../_models/Contact';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  addMeal(id: string, meal: Meal) {
    return this.http.post(this.baseUrl + 'users/' + id + 'meals/' + id, meal);
  }

  sendMail(contact: Contact) {
    return this.http.post(this.baseUrl + 'contact/', contact);
  }

}
