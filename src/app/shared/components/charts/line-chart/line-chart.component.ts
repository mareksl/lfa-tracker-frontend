import { Component, OnInit, Input } from '@angular/core';
import html2canvas from 'html2canvas';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  exporting: boolean;

  @Input()
  title: string;

  @Input()
  chartData: { data: number[]; label: string }[];
  @Input()
  chartLabels: string[];

  chartOptions = {
    responsive: true,
    layout: { padding: 8 },
    elements: {
      line: {
        tension: 0,
        fill: false
      },
      point: {
        radius: 4
      }
    },
    legend: {
      labels: {
        usePointStyle: false,
        boxWidth: 12
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 100,
            callback: function(value) {
              return value + '%';
            }
          },
          scaleLabel: {
            display: true,
            labelString: 'Percentage Done'
          }
        }
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Date'
          }
        }
      ]
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          return (
            data.datasets[tooltipItem.datasetIndex].label +
            ': ' +
            tooltipItem.yLabel +
            '%'
          );
        }
      }
    }
  };

  constructor() {}

  ngOnInit() {
    this.exporting = false;
  }

  toCanvas(el) {
    this.exporting = true;
    html2canvas(el).then(canvas => {
      const a = document.createElement('a');
      a.setAttribute(
        'href',
        canvas
          .toDataURL('image/jpeg')
          .replace('image/jpeg', 'image/octet-stream')
      );
      a.setAttribute(
        'download',
        `${formatDate(new Date(), 'dd_MM_y', 'en_US')}_${
          this.title ? this.title : ''
        }.jpg`
      );
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      this.exporting = false;
    });
  }
}
