import { Component, OnInit, Input } from '@angular/core';
import { IStatistics } from 'src/app/shared/models/statistics.model';

@Component({
  selector: 'app-statistics-by-assignee',
  templateUrl: './statistics-by-assignee.component.html',
  styleUrls: ['./statistics-by-assignee.component.scss']
})
export class StatisticsByAssigneeComponent implements OnInit {
  @Input()
  statistics: IStatistics;

  assignees: string[];

  get assigneeList() {
    return Object.keys(this.statistics);
  }

  constructor() {}

  ngOnInit() {
    this.assignees = [];
  }
}
