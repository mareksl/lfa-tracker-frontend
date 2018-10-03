import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-total-pie-chart',
  templateUrl: './total-pie-chart.component.html',
  styleUrls: ['./total-pie-chart.component.scss']
})
export class TotalPieChartComponent implements OnInit {
  @Input()
  chartData: number[] = [];
  chartLabels: string[] = [];
  chartOptions = { responsive: true };

  chartColors: any[];

  constructor() {}

  ngOnInit() {
    this.chartLabels = ['Checked Funds', 'Unchecked Funds'];
    this.chartColors = [{ backgroundColor: ['#429765', '#f44336'] }];
  }
}
