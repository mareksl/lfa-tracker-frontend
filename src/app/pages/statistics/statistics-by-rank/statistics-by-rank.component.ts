import { Component, OnInit, Input } from '@angular/core';
import { IStatistics } from 'src/app/shared/models/statistics.model';

@Component({
  selector: 'app-statistics-by-rank',
  templateUrl: './statistics-by-rank.component.html',
  styleUrls: ['./statistics-by-rank.component.scss']
})
export class StatisticsByRankComponent implements OnInit {
  @Input()
  statistics: IStatistics;
  constructor() {}

  ngOnInit() {}
}
