import { Component, OnInit, Input } from '@angular/core';
import { Fund } from 'src/app/shared/models/fund.model';

@Component({
  selector: 'app-funds-list',
  templateUrl: './funds-list.component.html',
  styleUrls: ['./funds-list.component.scss']
})
export class FundsListComponent implements OnInit {
  @Input()
  funds: Fund[];

  constructor() {}

  ngOnInit() {}
}
