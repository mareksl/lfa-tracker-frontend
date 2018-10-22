import { Component, OnInit, Input } from '@angular/core';
import { IStatistics } from 'src/app/shared/models/statistics.model';

@Component({
  selector: 'app-total-statistics',
  templateUrl: './total-statistics.component.html',
  styleUrls: ['./total-statistics.component.scss']
})
export class TotalStatisticsComponent implements OnInit {
  @Input()
  statistics: IStatistics;
  constructor() {}

  ngOnInit() {}
}
