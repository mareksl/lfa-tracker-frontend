import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStatistics } from '../../../shared/models/statistics.model';
import { config } from '../../../config/app-settings.config';
import { catchError, map } from 'rxjs/operators';
import { handleError } from '../../../shared/handlers/error.handler';
import { BehaviorSubject } from 'rxjs';

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
  statsChanged: BehaviorSubject<IStatistics>;

  historicalStats: IStatistics[];
  historicalStatsChanged: BehaviorSubject<IStatistics[]>;

  constructor(private http: HttpClient) {
    this.stats = null;
    this.statsChanged = new BehaviorSubject<IStatistics>(null);

    this.historicalStats = [];
    this.historicalStatsChanged = new BehaviorSubject<IStatistics[]>([]);
  }

  getLatest() {
    return this.http
      .get<StatisticsResponse>(`${config.apiUrl}/stats`)
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
      .get<HistoricalStatisticsResponse>(`${config.apiUrl}/stats/history`)
      .pipe(
        map(
          (hsResponse: HistoricalStatisticsResponse) => hsResponse.statistics
        ),
        catchError(handleError('getHistorical', []))
      )
      .subscribe((stats: IStatistics[]) => {
        this.historicalStats = stats;
        this.historicalStatsChanged.next(this.historicalStats);
      });
  }
}
