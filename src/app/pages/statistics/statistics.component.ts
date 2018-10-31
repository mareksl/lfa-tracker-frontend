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
  statistics: IStatistics = {
    totalCount: 0,
    doneCount: 0,
    percentageDone: 0,
    statsByAssignee: {},
    statsByRank: {},
    statsByDepartment: {},
    statsByUniverse: {},
    date: null
  };

  constructor(private statsService: StatisticsService) {}

  ngOnInit() {
    this.loading = false;
    this.statisticsSubscription = this.fetchStatistics();
  }

  fetchStatistics() {
    this.loading = true;
    return this.statsService.getLatest().subscribe((stats: IStatistics) => {
      this.statistics = stats;
      this.loading = false;
    });
  }

  refreshData() {
    this.fetchStatistics();
  }
}
