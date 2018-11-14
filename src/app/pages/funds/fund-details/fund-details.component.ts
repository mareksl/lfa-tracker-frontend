import { Component, OnInit } from '@angular/core';
import { Fund } from 'src/app/shared/models/fund.model';
import { ActivatedRoute, Params } from '@angular/router';
import { FundsService } from 'src/app/core/services/funds/funds.service';
import html2canvas from 'html2canvas';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-fund-details',
  templateUrl: './fund-details.component.html',
  styleUrls: ['./fund-details.component.scss']
})
export class FundDetailsComponent implements OnInit {
  loading: boolean;
  exporting: boolean;

  fund: Fund;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private fundsService: FundsService
  ) {}

  ngOnInit() {
    this.exporting = false;
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

  toCanvas(el) {
    this.exporting = true;
    html2canvas(el).then(canvas => {
      const a = document.createElement('a');
      a.setAttribute(
        'href',
        canvas
          .toDataURL('image/jpeg')
          .replace('image/jpeg', 'image/octet-stream')
      );
      a.setAttribute(
        'download',
        `${formatDate(new Date(), 'dd_MM_y', 'en_US')}_${
          this.fund.lipperID
        }.jpg`
      );
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      this.exporting = false;
    });
  }
}
