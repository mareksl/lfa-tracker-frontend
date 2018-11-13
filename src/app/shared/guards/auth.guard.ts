import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { config } from 'src/app/config/app-settings.config';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/core/services/auth/auth.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(private router: Router, private http: HttpClient) {}

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      this.router.navigate(['/auth'], {
        queryParams: { returnUrl: state.url }
      });
      return false;
    }

    const token = (<User>JSON.parse(currentUser)).token;

    return this.http
      .get(`${config.apiUrl}/users/me`, {
        headers: { 'x-auth': token }
      })
      .pipe(
        map((user: User) => {
          return true;
        }),
        catchError(err => {
          localStorage.removeItem('currentUser');
          this.router.navigate(['/auth'], {
            queryParams: { returnUrl: state.url }
          });
          return throwError(err.message);
        })
      );
  }
}
