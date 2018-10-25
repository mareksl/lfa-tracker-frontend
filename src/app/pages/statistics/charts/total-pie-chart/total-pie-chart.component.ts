import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-total-pie-chart',
  templateUrl: './total-pie-chart.component.html',
  styleUrls: ['./total-pie-chart.component.scss']
})
export class TotalPieChartComponent implements OnInit {
  @Input()
  chartData: number[];

  @Input()
  chartLabels: string[];

  @Input()
  title: string;

  chartOptions = {
    responsive: true,
    legend: { display: true, position: 'left' }
  };
  legendOptions = { display: true, position: 'left' };

  chartColors: any[];

  constructor() {}

  ngOnInit() {
    this.chartColors = [
      {
        borderColor: ['#429765', '#f44336'],
        backgroundColor: ['#D9EAE0', '#fcd9d6'],
        borderWidth: 1
      }
    ];
  }
}
