import { Component, OnInit, Input } from '@angular/core';
import html2canvas from 'html2canvas';
import { formatDate } from '@angular/common';

const hideOtherDatasets = (ci, index) => {
  const alreadyHidden =
    ci.getDatasetMeta(index).hidden === null
      ? false
      : ci.getDatasetMeta(index).hidden;
  ci.data.datasets.forEach(function(_e, i) {
    const meta = ci.getDatasetMeta(i);
    if (i !== index) {
      if (!alreadyHidden) {
        meta.hidden = meta.hidden === null ? !meta.hidden : null;
      } else if (meta.hidden === null) {
        meta.hidden = true;
      }
    } else if (i === index) {
      meta.hidden = null;
    }
  });
  return ci.update();
};

const hideDataSet = (ci, index) => {
  const chartMeta = ci.getDatasetMeta(index);
  chartMeta.hidden =
    chartMeta.hidden === null ? !ci.data.datasets[index].hidden : null;
  ci.update();
};

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
    maintainAspectRatio: true,
    layout: { padding: 8 },
    elements: {
      line: {
        borderWidth: 2,
        cubicInterpolationMode: 'monotone',
        tension: 0.2,
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
      },
      onClick(e, legendItem) {
        const ci = this.chart;
        const index = legendItem.datasetIndex;

        if (e.ctrlKey) {
          return hideOtherDatasets(ci, index);
        }
        return hideDataSet(ci, index);
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
    },
    onClick(e) {
      const ci = this.chart;
      const activePoints = ci.getElementAtEvent(e);

      if (activePoints.length > 0) {
        const index = activePoints[0]._datasetIndex;
        if (e.ctrlKey) {
          return hideOtherDatasets(ci, index);
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
