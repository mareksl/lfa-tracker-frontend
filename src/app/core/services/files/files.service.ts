import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'src/app/config/app-settings.config';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  constructor(private http: HttpClient) {}

  download() {
    return this.http.get(`${config.apiUrl}/files`, {
      responseType: 'blob',
      observe: 'response'
    });
  }
}
