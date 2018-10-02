import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStatistics } from '../../../shared/models/statistics.model';
import { config } from '../../../config/app-settings.config';
import { catchError, map } from 'rxjs/operators';
import { handleError } from '../../../shared/handlers/error.handler';

export interface StatisticsResponse {
  statistics: IStatistics;
}

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<StatisticsResponse>(`${config.apiUrl}/stats`).pipe(
      map((statsResponse: StatisticsResponse) => statsResponse.statistics),
      catchError(handleError('getAll', {}))
    );
  }
}
