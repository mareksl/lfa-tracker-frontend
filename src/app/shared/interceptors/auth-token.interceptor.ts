import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/services/auth/auth.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = localStorage.getItem('currentUser');
    if (user) {
      const token = (<User>JSON.parse(user)).token;

      const modified = req.clone({ setHeaders: { 'x-auth': token } });
      return next.handle(modified);
    }
    return next.handle(req);
  }
}
