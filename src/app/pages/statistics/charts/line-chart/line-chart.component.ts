import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input()
  title: string;

  chartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          stacked: true
        }
      ]
    }
  };

  chartData = [
    { data: [0, 10, 25, 32, 61, 87, 100], label: 'Series A', lineTension: 0 },
    { data: [0, 2, 8, 19, 22, 37, 49], label: 'Series B', lineTension: 0 },
    { data: [0, 0, 3, 9, 13, 21, 32], label: 'Series C', lineTension: 0 }
  ];

  chartLabels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ];
  constructor() {}

  ngOnInit() {}
}
