import { Component, OnInit } from '@angular/core';
import { Fund } from 'src/app/shared/models/fund.model';
import { ActivatedRoute, Params } from '@angular/router';
import { FundsService } from 'src/app/core/services/funds/funds.service';

@Component({
  selector: 'app-fund-details',
  templateUrl: './fund-details.component.html',
  styleUrls: ['./fund-details.component.scss']
})
export class FundDetailsComponent implements OnInit {
  loading: boolean;

  fund: Fund;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private fundsService: FundsService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getFund(this.id);
    });
  }

  getFund(id: number) {
    this.fundsService.getById(id).subscribe(fund => {
      this.fund = fund;
      this.loading = false;
    });
  }
}
