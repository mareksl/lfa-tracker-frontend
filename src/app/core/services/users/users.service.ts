import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../auth/auth.service';
import { map, catchError } from 'rxjs/operators';
import { handleError } from 'src/app/shared/handlers/error.handler';

interface UserResponse {
  user: User;
}

interface UsersResponse {
  users: User[];
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get<UsersResponse>(`${environment.API_URL}/users`)
      .pipe(map(response => response.users));
  }

  getById(id: number) {
    return this.http
      .get<UserResponse>(`${environment.API_URL}/users/${id}`)
      .pipe(
        map(response => response.user),
        catchError(handleError('getById', null))
      );
  }

  toggleActive(id: number, toggleTo: boolean) {
    return this.http
      .patch<UserResponse>(`${environment.API_URL}/users/${id}`, {
        active: toggleTo
      })
      .pipe(map(response => response.user));
  }

  delete(id: number) {
    return this.http.delete<UserResponse>(`${environment.API_URL}/users/${id}`);
  }

  setRole(id: number, role: string) {
    return this.http
      .patch<UserResponse>(`${environment.API_URL}/users/${id}`, {
        role
      })
      .pipe(map(response => response.user));
  }
}
