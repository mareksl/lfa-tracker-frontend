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
    return Object.keys(this.statistics).sort((a: string, b: string) => {
      if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
      }
      if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }

  constructor() {}

  ngOnInit() {
    this.assignees = [];
  }
}
