import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IStatistics } from '../../shared/models/statistics.model';
import { StatisticsService } from '../../core/services/statistics/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  loading: boolean;
  statisticsSubscription: Subscription;
  statistics: IStatistics;

  constructor(private statsService: StatisticsService) {}

  ngOnInit() {
    this.loading = false;
    this.statisticsSubscription = this.statsService.statsChanged.subscribe(
      (stats: IStatistics) => {
        this.statistics = stats;
        this.loading = false;
      }
    );
    this.fetchStatistics();
  }

  fetchStatistics() {
    this.loading = true;
    this.statsService.getLatest();
  }

  refreshData() {
    this.fetchStatistics();
  }
}
