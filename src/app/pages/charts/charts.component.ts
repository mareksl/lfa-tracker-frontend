import { Component, OnInit, OnDestroy } from '@angular/core';
import { IStatistics } from 'src/app/shared/models/statistics.model';
import { Subscription } from 'rxjs';
import { StatisticsService } from 'src/app/core/services/statistics/statistics.service';
import { formatDate } from '@angular/common';

interface IChartData {
  data: number[];
  label: string;
  spanGaps: boolean;
}

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, OnDestroy {
  loading: boolean;

  selectedCharts: { property: string; title: string }[];
  charts: { chartData: IChartData[]; chartLabels: string[]; title: string }[];

  historicalStats: IStatistics[];
  historicalSub: Subscription;

  constructor(private statsService: StatisticsService) {}

  ngOnInit() {
    this.charts = [];
    this.selectedCharts = [
      { property: 'statsByRank', title: 'Rank' },
      { property: 'statsByDepartment', title: 'Department' },
      { property: 'statsByUniverse', title: 'Universe' }
    ];

    this.loading = true;

    this.historicalSub = this.statsService.historicalStatsChanged.subscribe(
      (stats: IStatistics[]) => {
        this.historicalStats = stats;
        this.drawCharts();
      }
    );
    this.fetchStatistics();
  }

  ngOnDestroy() {
    this.historicalSub.unsubscribe();
  }

  fetchStatistics() {
    this.loading = true;
    this.statsService.getHistorical();
  }

  private drawCharts() {
    this.charts = this.selectedCharts.map(chart => {
      return { ...this.drawChart(chart.property), title: chart.title };
    });
    this.loading = false;
  }

  private drawChart(
    property: string
  ): { chartData: IChartData[]; chartLabels: string[] } {
    return {
      chartData: this.makeChartData(property),
      chartLabels: this.makeChartLabels()
    };
  }

  private makeChartData(property: string): IChartData[] {
    const propertyNames = [];
    return this.historicalStats
      .sort((a, b) => {
        return a.date > b.date ? 1 : a.date < b.date ? -1 : 0;
      })
      .reduce((result: IChartData[], stats, j) => {
        const props = Object.keys(stats[property]);

        props.forEach(key => {
          if (propertyNames.indexOf(key) === -1) {
            propertyNames.push(key);
          }

          if (!result.some(el => el.label === key)) {
            result.push({ data: [], label: key, spanGaps: true });
          }
        });

        propertyNames.forEach((key: string) => {
          result.find(el => el.label === key).data[j] = stats[property][key]
            ? +(stats[property][key].percentageDone * 100).toFixed(2)
            : null;
        });
        return result;
      }, []);
  }

  private makeChartLabels(): string[] {
    return this.historicalStats.map(stats =>
      formatDate(stats.date, 'dd/MM/y', 'en-US')
    );
  }
}
