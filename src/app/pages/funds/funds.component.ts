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
  private fundsSubscription: Subscription;
  funds: Fund[];

  constructor(private fundsService: FundsService) {}

  ngOnInit() {
    this.fundsSubscription = this.fetchFunds();
  }

  fetchFunds() {
    return this.fundsService.getAll().subscribe((funds: Fund[]) => {
      this.funds = funds;
    });
  }
}
