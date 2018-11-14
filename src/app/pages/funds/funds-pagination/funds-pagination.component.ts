import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-funds-pagination',
  templateUrl: './funds-pagination.component.html',
  styleUrls: ['./funds-pagination.component.scss']
})
export class FundsPaginationComponent implements OnInit {
  advancedSearchOpen: boolean;

  @Input()
  currentPage: number;
  @Input()
  pageCount: number;
  @Input()
  resultsPerPage: number;
  @Input()
  query: string;

  @Output()
  currentPageChange = new EventEmitter<number>();
  @Output()
  resultsPerPageChange = new EventEmitter<number>();
  @Output()
  queryChange = new EventEmitter<string>();

  get pagesToDisplay(): number[] {
    const minPage = Math.max(1, +this.currentPage - 5);
    const maxPage = Math.min(+this.currentPage + 4, this.pageCount - 1);

    const pages = Array(this.pageCount)
      .fill(undefined)
      .map((x, i) => i);

    return pages.slice(minPage, maxPage);
  }

  constructor() {}

  ngOnInit() {
    this.advancedSearchOpen = false;
  }

  changePage(page: number) {
    this.currentPageChange.emit(page);
  }

  changeResultsPerPage(i: number) {
    this.resultsPerPageChange.emit(i);
  }

  search() {
    this.queryChange.emit(this.query);
  }

  hideAdvancedSearch() {
    this.advancedSearchOpen = false;
  }
}
