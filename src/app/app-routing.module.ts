import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FundsComponent } from './pages/funds/funds.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'funds', component: FundsComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
