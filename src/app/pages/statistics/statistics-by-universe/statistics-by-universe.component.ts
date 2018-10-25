import { Component, OnInit, Input } from '@angular/core';
import { IStatistics } from 'src/app/shared/models/statistics.model';

@Component({
  selector: 'app-statistics-by-universe',
  templateUrl: './statistics-by-universe.component.html',
  styleUrls: ['./statistics-by-universe.component.scss']
})
export class StatisticsByUniverseComponent implements OnInit {
  @Input()
  statistics: IStatistics;

  search: string;
  constructor() {}

  statsVisible: boolean;

  ngOnInit() {
    this.search = '';
    this.statsVisible = false;
  }

  get statisticsFiltered() {
    const regex = new RegExp(this.search, 'i');
    return Object.keys(this.statistics)
      .filter(key => regex.test(key))
      .reduce((result, key) => {
        result[key] = this.statistics[key];
        return result;
      }, {});
  }
}
