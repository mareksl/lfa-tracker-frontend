import { Component, OnInit, Input } from '@angular/core';
import {
  IStatisticsItem,
  IStatisticsCollection
} from 'src/app/shared/models/statistics.model';
import html2canvas from 'html2canvas';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-statistics-item',
  templateUrl: './statistics-item.component.html',
  styleUrls: ['./statistics-item.component.scss']
})
export class StatisticsItemComponent implements OnInit {
  @Input()
  item: IStatisticsItem | IStatisticsCollection;

  // tslint:disable-next-line:no-input-rename
  @Input('title')
  titleInput: string;

  @Input()
  key: string;

  exporting: boolean;

  get title(): string {
    return this.titleInput ? `${this.titleInput} ` : '';
  }

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
          this.title ? this.title + '_' : ''
        }${this.key}.jpg`
      );
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      this.exporting = false;
    });
  }
}
