import { Component, OnInit } from '@angular/core';
import { FundsService } from '../../core/services/funds/funds.service';
import { Fund } from '../../shared/models/fund.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {
  loading: boolean;
  fundsSubscription: Subscription;
  funds: Fund[];

  constructor(private fundsService: FundsService) {}

  ngOnInit() {
    this.funds = [];
    this.loading = false;
    this.fundsSubscription = this.fetchFunds();
  }

  fetchFunds() {
    this.loading = true;
    return this.fundsService.getAll().subscribe((funds: Fund[]) => {
      this.funds = funds;
      this.loading = false;
    });
  }

  refreshData() {
    this.fetchFunds();
  }
}
