import { Component, OnInit, Input } from '@angular/core';
import { IStatisticsCollection } from 'src/app/shared/models/statistics.model';

@Component({
  selector: 'app-total-statistics-list',
  templateUrl: './total-statistics-list.component.html',
  styleUrls: ['./total-statistics-list.component.scss']
})
export class TotalStatisticsListComponent implements OnInit {
  @Input() statistics: IStatisticsCollection;

  constructor() {}

  ngOnInit() {}
}
