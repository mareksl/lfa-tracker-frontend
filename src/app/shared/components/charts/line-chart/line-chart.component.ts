import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  chartData: { data: number[]; label: string }[];
  @Input()
  chartLabels: string[];

  chartOptions = {
    responsive: true,
    elements: {
      line: {
        tension: 0,
        fill: false
      },
      point: {
        radius: 4
      }
    }
  };

  constructor() {}

  ngOnInit() {}
}
