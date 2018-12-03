import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  FundsResponse,
  FundsService
} from '../../core/services/funds/funds.service';
import { Fund } from '../../shared/models/fund.model';

export class SearchQuery {
  fundName: string;
  order: string;
  lipperID: string;
  department: string;
  fundOwner: string;
  awardUniverse: string;
  highestRank: string;

  constructor() {
    this.fundName = '';
    this.order = '';
    this.lipperID = '';
    this.department = '';
    this.fundOwner = '';
    this.awardUniverse = '';
    this.highestRank = '';
  }

  build(params) {
    this.fundName = params.fundName || '';
    this.order = params.order || '';
    this.lipperID = params.lipperID || '';
    this.department = params.department || '';
    this.fundOwner = params.fundOwner || '';
    this.awardUniverse = params.awardUniverse || '';
    this.highestRank = params.highestRank || '';
  }

  merge(params) {
    this.fundName = params.fundName || this.fundName;
    this.order = params.order || this.order;
    this.lipperID = params.lipperID || this.lipperID;
    this.department = params.department || this.department;
    this.fundOwner = params.fundOwner || this.fundOwner;
    this.awardUniverse = params.awardUniverse || this.awardUniverse;
    this.highestRank = params.highestRank || this.highestRank;
  }
}

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

  query: SearchQuery;

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
    this.query = new SearchQuery();

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

    this.route.queryParams.subscribe(params => {
      this.page = params.page || this.page;
      this.limit = params.limit || this.limit;

      this.query.merge(params);

      this.fetchFunds();
    });

    this.fetchFunds();
  }

  fetchFunds() {
    this.loading = true;
    this.fundsService.getRange(this.page, this.limit, this.query);
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

  search(fundName: string) {
    this.query.build({ fundName });
    this.router.navigate(['/funds'], {
      queryParamsHandling: 'merge',
      queryParams: { ...this.query, page: 1 }
    });
  }

  ngOnDestroy() {
    this.fundsSubscription.unsubscribe();
  }
}
