import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStatistics } from '../../../shared/models/statistics.model';
import { catchError, map } from 'rxjs/operators';
import { handleError } from '../../../shared/handlers/error.handler';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface StatisticsResponse {
  statistics: IStatistics;
}
export interface HistoricalStatisticsResponse {
  statistics: IStatistics[];
}

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  stats: IStatistics;
  statsChanged: Subject<IStatistics>;

  historicalStats: IStatistics[];
  historicalStatsChanged: Subject<IStatistics[]>;

  constructor(private http: HttpClient) {
    this.stats = null;
    this.statsChanged = new Subject<IStatistics>();

    this.historicalStats = [];
    this.historicalStatsChanged = new Subject<IStatistics[]>();
  }

  getLatest() {
    return this.http
      .get<StatisticsResponse>(`${environment.API_URL}/stats`)
      .pipe(
        map((statsResponse: StatisticsResponse) => statsResponse.statistics),
        catchError(handleError('getLatest', {}))
      )
      .subscribe((stats: IStatistics) => {
        this.stats = stats;
        this.statsChanged.next(this.stats);
      });
  }

  getHistorical() {
    return this.http
      .get<HistoricalStatisticsResponse>(`${environment.API_URL}/stats/history`)
      .pipe(
        map(
          (hsResponse: HistoricalStatisticsResponse) => hsResponse.statistics
        ),
        catchError(handleError('getHistorical', []))
      )
      .subscribe((stats: IStatistics[]) => {
        this.historicalStats = stats;
        this.historicalStatsChanged.next(stats);
      });
  }

  removeById(id: string) {
    return this.http
      .delete<StatisticsResponse>(`${environment.API_URL}/stats/${id}`)
      .subscribe((stats: StatisticsResponse) => {
        return this.getHistorical();
      });
  }
}
