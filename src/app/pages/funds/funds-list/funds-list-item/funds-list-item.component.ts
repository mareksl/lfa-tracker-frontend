import { Component, OnInit, Input } from '@angular/core';
import { Fund, FundStatus } from 'src/app/shared/models/fund.model';

@Component({
  selector: 'app-funds-list-item',
  templateUrl: './funds-list-item.component.html',
  styleUrls: ['./funds-list-item.component.scss']
})
export class FundsListItemComponent implements OnInit {
  @Input()
  fund: Fund;

  constructor() {}

  ngOnInit() {}

  get fundClass() {
    return {
      'fund-status-icon--done-with-perf':
        this.fund.fundStatus === FundStatus.doneWithPerf,
      'fund-status-icon--done': this.fund.fundStatus === FundStatus.done,
      'fund-status-icon--pending': this.fund.fundStatus === FundStatus.pending
    };
  }
}
