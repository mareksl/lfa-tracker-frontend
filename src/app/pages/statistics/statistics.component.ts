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
  assignee: string;
  loading: boolean;
  statisticsSubscription: Subscription;
  statistics: IStatistics = {
    totalCount: 0,
    doneCount: 0,
    percentageDone: 0,
    statsByAssignee: {},
    statsByRank: {},
    statsByDepartment: {}
  };

  totalPieChartData: number[] = [0, 0];

  constructor(private statsService: StatisticsService) {}

  ngOnInit() {
    this.loading = false;
    this.statisticsSubscription = this.fetchStatistics();
    this.assignee = '';
  }

  fetchStatistics() {
    this.loading = true;
    return this.statsService.getAll().subscribe((stats: IStatistics) => {
      this.statistics = stats;
      this.totalPieChartData = [
        this.statistics.doneCount,
        this.statistics.totalCount - this.statistics.doneCount
      ];
      this.loading = false;
    });
  }

  refreshData() {
    this.fetchStatistics();
  }
}
