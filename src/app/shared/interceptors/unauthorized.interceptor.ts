import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      tap(
        event => event,
        error => {
          if (error instanceof HttpErrorResponse && error.status === 401) {
            localStorage.removeItem('currentUser');
            this.router.navigate(['/auth']);
          }
        }
      )
    );
  }
}
