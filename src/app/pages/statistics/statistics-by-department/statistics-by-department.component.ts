import { Component, OnInit, Input } from '@angular/core';
import { IStatistics } from 'src/app/shared/models/statistics.model';

@Component({
  selector: 'app-statistics-by-department',
  templateUrl: './statistics-by-department.component.html',
  styleUrls: ['./statistics-by-department.component.scss']
})
export class StatisticsByDepartmentComponent implements OnInit {
  @Input()
  statistics: IStatistics;

  search: string;

  statsVisible: boolean;
  rank123Visible: boolean;

  constructor() {}

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
