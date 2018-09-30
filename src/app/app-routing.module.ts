import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FundsComponent } from './pages/funds/funds.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'funds', component: FundsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
