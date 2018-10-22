import { Component, OnInit, Input } from '@angular/core';
import { IStatisticsItem } from 'src/app/shared/models/statistics.model';

@Component({
  selector: 'app-statistics-item',
  templateUrl: './statistics-item.component.html',
  styleUrls: ['./statistics-item.component.scss']
})
export class StatisticsItemComponent implements OnInit {
  @Input()
  item: IStatisticsItem;

  // tslint:disable-next-line:no-input-rename
  @Input('title')
  titleInput: string;

  @Input()
  key: string;

  get title(): string {
    return this.titleInput ? `${this.titleInput} ` : '';
  }

  constructor() {}

  ngOnInit() {}
}
