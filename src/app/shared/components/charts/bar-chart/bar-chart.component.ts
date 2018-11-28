import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input()
  chartData: number[];

  @Input()
  chartLabels: string[];

  @Input()
  title: string;

  @Input()
  max: number;

  chartColors: any[];

  chartOptions: ChartOptions = {
    responsive: true,
    legend: { display: false },
    scales: {
      xAxes: [
        {
          gridLines: { display: true },
          ticks: {min: 0, max: null, stepSize: null, display: true, autoSkip: false }
        }
      ],
      yAxes: [
        {
          gridLines: { display: false },
          ticks: { autoSkip: false }
        }
      ]
    }
  };

  constructor() {}

  ngOnInit() {
    this.chartColors = [
      {
        backgroundColor: ['#6B95C0', '#4372A3', '#2A5F96', '#15497F'],
        borderWidth: 1
      }
    ];

    this.chartOptions.scales.xAxes[0].ticks.max = this.max;
    this.chartOptions.scales.xAxes[0].ticks.stepSize = this.max / 4;
  }
}
