import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const user = <User>JSON.parse(localStorage.getItem('currentUser'));
    const allowedRoles = <string[]>next.data['allowed'];

    if (allowedRoles.includes(user.role)) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
