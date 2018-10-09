import { Component, OnInit, Input } from '@angular/core';
import { Fund } from 'src/app/shared/models/fund.model';

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
}
