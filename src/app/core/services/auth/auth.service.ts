import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { config } from 'src/app/config/app-settings.config';
import { Subject } from 'rxjs';

interface User {
  userID: string;
  role: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = new Subject<User>();
  private user: User;

  constructor(private http: HttpClient) {}

  register(userID: string, password: string) {
    const id = +userID;
    this.http
      .post(`${config.apiUrl}/users`, { userID: id, password })
      .subscribe((response: HttpResponse<User>) => {
        const token = response.headers.get('x-auth');
        const resUserID = response.body.userID;
        const role = response.body.role;

        this.user = { userID: resUserID, role, token };
      });
  }

  logIn(userID: string, password: string) {
    console.log('logging in:', userID, password);
  }
}
