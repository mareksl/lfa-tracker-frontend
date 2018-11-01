import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  FundsResponse,
  FundsService
} from '../../core/services/funds/funds.service';
import { Fund } from '../../shared/models/fund.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit, OnDestroy {
  loading: boolean;
  fundsSubscription: Subscription;
  funds: Fund[];
  page: number;
  pageCount: number;
  limit: number;
  fullFundCount: number;
  query: string;

  constructor(
    private fundsService: FundsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.fullFundCount = 0;
    this.page = 1;
    this.limit = 10;
    this.funds = [];
    this.query = '';

    this.fundsSubscription = this.fundsService.fundsChanged.subscribe(
      (response: FundsResponse) => {
        this.funds = <Fund[]>response.funds;
        this.pageCount = response.pages;
        this.page = response.page || this.page;
        this.limit = response.limit || this.limit;
        this.fullFundCount = response.count;
        this.loading = false;
      }
    );

    this.route.queryParams
      .pipe(filter(params => params.page || params.limit || params.q))
      .subscribe(params => {
        this.page = params.page || this.page;
        this.limit = params.limit || this.limit;
        this.query = params.q || this.query;
        this.fetchFunds();
      });

    this.fetchFunds();
  }

  fetchFunds() {
    this.loading = true;
    this.fundsService.getRange(this.page, this.limit, {
      fundName: this.query
    });
  }

  changePage(page: number) {
    this.page = page;
    this.router.navigate(['/funds'], {
      queryParamsHandling: 'merge',
      queryParams: { page }
    });
  }

  changeLimit(limit: number) {
    this.limit = limit;
    this.router.navigate(['/funds'], {
      queryParamsHandling: 'merge',
      queryParams: { limit }
    });
  }

  search(query: string) {
    this.query = query;
    this.router.navigate(['/funds'], {
      queryParamsHandling: 'merge',
      queryParams: { q: query, page: 1 }
    });
  }

  ngOnDestroy() {
    this.fundsSubscription.unsubscribe();
  }
}
