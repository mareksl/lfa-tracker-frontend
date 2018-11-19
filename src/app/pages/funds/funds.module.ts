import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundsRoutingModule } from './funds-routing.module';
import { FundsListComponent } from './funds-list/funds-list.component';
import { FundsListItemComponent } from './funds-list/funds-list-item/funds-list-item.component';
import { FundsPaginationComponent } from './funds-pagination/funds-pagination.component';
import { FundsAdvancedSearchComponent } from './funds-advanced-search/funds-advanced-search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FundsComponent } from './funds.component';
import { FundDetailsComponent } from './fund-details/fund-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    FundsRoutingModule
  ],
  declarations: [
    FundsComponent,
    FundDetailsComponent,
    FundsListComponent,
    FundsListItemComponent,
    FundsPaginationComponent,
    FundsAdvancedSearchComponent
  ]
})
export class FundsModule {}
