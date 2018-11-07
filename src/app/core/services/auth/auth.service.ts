import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { config } from 'src/app/config/app-settings.config';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface User {
  userID: number;
  role: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private setUser(response: HttpResponse<User>) {
    const token = response.headers.get('x-auth');
    const resUserID = response.body.userID;
    const role = response.body.role;
    const user = { userID: resUserID, role, token };

    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  }

  register(userID: string, password: string) {
    const id = userID;
    return this.http
      .post(
        `${config.apiUrl}/users`,
        { userID: id, password },
        { observe: 'response' }
      )
      .pipe(map(this.setUser));
  }

  logIn(userID: string, password: string) {
    return this.http
      .post(
        `${config.apiUrl}/users/login`,
        { userID, password },
        { observe: 'response' }
      )
      .pipe(
        map(this.setUser),
        catchError((res: HttpErrorResponse) => {
          return throwError(res.error);
        })
      );
  }

  logOut() {
    const user = <User>JSON.parse(localStorage.getItem('currentUser'));
    return this.http
      .delete(`${config.apiUrl}/users/me/token`, {
        headers: { 'x-auth': user.token }
      })
      .pipe(
        tap(() => {
          localStorage.removeItem('currentUser');
        })
      );
  }
}
