import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-funds-pagination',
  templateUrl: './funds-pagination.component.html',
  styleUrls: ['./funds-pagination.component.scss']
})
export class FundsPaginationComponent implements OnInit {
  @Input()
  currentPage: number;
  @Input()
  pageCount: number;
  @Input()
  resultsPerPage: number;

  @Output()
  pageChanged = new EventEmitter<number>();
  @Output()
  resultsPerPageChanged = new EventEmitter<number>();

  get pagesToDisplay(): number[] {
    const minPage = Math.max(1, +this.currentPage - 5);
    const maxPage = Math.min(+this.currentPage + 4, this.pageCount - 1);

    const pages = Array(this.pageCount)
      .fill(undefined)
      .map((x, i) => i);

    return pages.slice(minPage, maxPage);
  }

  constructor() {}

  ngOnInit() {}

  changePage(page: number) {
    this.pageChanged.emit(page);
  }

  changeResultsPerPage(i: number) {
    this.resultsPerPageChanged.emit(i);
  }
}
