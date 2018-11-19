import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../auth/auth.service';
import { map } from 'rxjs/operators';

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
}
