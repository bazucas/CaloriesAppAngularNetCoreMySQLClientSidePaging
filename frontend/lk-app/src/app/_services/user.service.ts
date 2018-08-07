import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../_models/User';
import { Contact } from '../_models/Contact';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  UpdateUser(userId: string, user: User) {
    return this.http.put(this.baseUrl + 'users/' + userId, user);
  }

  DeleteUser(userId: string) {
    return this.http.delete(this.baseUrl + 'users/' + userId);
  }

  getUsers() {
    return this.http.get(this.baseUrl + 'users/');
  }

  getUser(userId: string) {
    return this.http.get(this.baseUrl + 'users/' + userId);
  }

  sendMail(contact: Contact) {
    return this.http.post(this.baseUrl + 'contact/', contact);
  }

}
