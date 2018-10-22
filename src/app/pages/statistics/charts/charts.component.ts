import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { IStatistics } from 'src/app/shared/models/statistics.model';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsComponent implements OnInit {
  @Input()
  statistics: IStatistics;

  get totalPieChartData(): number[] {
    return [
      this.statistics.doneCount,
      this.statistics.totalCount - this.statistics.doneCount
    ];
  }

  get rankPieChartData() {
    return Object.keys(this.statistics.statsByRank).reduce((result, key) => {
      result[key] = [
        this.statistics.statsByRank[key].doneCount,
        this.statistics.statsByRank[key].totalCount -
          this.statistics.statsByRank[key].doneCount
      ];
      return result;
    }, {});
  }

  constructor() {}

  ngOnInit() {}
}
