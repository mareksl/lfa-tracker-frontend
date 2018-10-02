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
  statisticsSubscription: Subscription;
  statistics: IStatistics = { totalFundCount: 0, percentageDone: 0 };

  chartData: number[] = [];
  chartLabels: string[] = [];
  chartOptions = { responsive: true };

  chartColors = [
    {
      backgroundColor: 'rgba(103, 58, 183, .1)',
      borderColor: 'rgb(103, 58, 183)',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    }
    // ...colors for additional data sets
  ];

  constructor(private statsService: StatisticsService) {}

  ngOnInit() {
    this.statisticsSubscription = this.fetchStatistics();

    this.chartLabels = ['Checked Funds', 'Unchecked Funds'];
  }

  fetchStatistics() {
    return this.statsService.getAll().subscribe((stats: IStatistics) => {
      this.statistics = stats;
      this.chartData = [
        this.statistics.percentageDone * this.statistics.totalFundCount,
        (1 - this.statistics.percentageDone) * this.statistics.totalFundCount
      ];
    });
  }
}
