import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NotificationsService } from '../notifications/notifications.service';

export interface User {
  userID: number;
  role: string;
  token?: string;
  active?: boolean;
  firstName?: string;
  lastName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private notifService: NotificationsService
  ) {}

  private setUser(response: HttpResponse<User>) {
    const token = response.headers.get('x-auth');
    const resUserID = response.body.userID;
    const role = response.body.role;
    const firstName = response.body.firstName;
    const lastName = response.body.lastName;
    const user = { userID: resUserID, role, token, firstName, lastName };

    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  }

  register(user: {
    userID: string;
    password: string;
    firstName: string;
    lastName: string;
  }) {
    return this.http
      .post(`${environment.API_URL}/users`, user, { observe: 'response' })
      .pipe(map((res: HttpResponse<User>) => res.body.userID));
  }

  logIn(userID: string, password: string) {
    return this.http
      .post(
        `${environment.API_URL}/users/login`,
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

  private removeUserAndNavigate() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth']);
  }

  logOut() {
    return this.http.delete(`${environment.API_URL}/users/me/token`).pipe(
      map(res => {
        this.removeUserAndNavigate();
      }),
      catchError(err => {
        this.removeUserAndNavigate();
        return throwError(err.message);
      })
    );
  }
}
