import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundsComponent } from './funds.component';
import { FundDetailsComponent } from './fund-details/fund-details.component';

const routes: Routes = [
  {
    path: '',
    component: FundsComponent,
    data: { state: 'funds' }
  },
  {
    path: ':id',
    component: FundDetailsComponent,
    data: { state: 'fund-details' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundsRoutingModule {}
