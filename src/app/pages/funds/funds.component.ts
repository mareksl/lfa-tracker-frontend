import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
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

    this.fundsSubscription = this.fetchFunds();

    this.route.queryParams
      .pipe(filter(params => params.page || params.limit || params.q))
      .subscribe(params => {
        this.page = params.page || this.page;
        this.limit = params.limit || this.limit;
        this.query = params.q || this.query;
        this.fundsSubscription.unsubscribe();
        this.fundsSubscription = this.fetchFunds();
        this.loading = false;
      });
  }

  fetchFunds() {
    this.loading = true;
    return this.fundsService
      .getRange(this.page, this.limit, this.query)
      .subscribe((fundsResponse: FundsResponse) => {
        this.funds = <Fund[]>fundsResponse.funds;
        this.pageCount = fundsResponse.pages;
        this.page = fundsResponse.page || this.page;
        this.limit = fundsResponse.limit || this.limit;
        this.fullFundCount = fundsResponse.count;
        this.loading = false;
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
