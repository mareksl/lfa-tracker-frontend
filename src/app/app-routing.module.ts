import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FundsComponent } from './pages/funds/funds.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FundDetailsComponent } from './pages/funds/fund-details/fund-details.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { state: 'dashboard' }
  },
  {
    path: 'funds',
    component: FundsComponent,
    data: { state: 'funds' }
  },
  {
    path: 'funds/:id',
    component: FundDetailsComponent
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    data: { state: 'statistics' }
  },
  {
    path: 'admin',
    component: AdminComponent,
    data: { state: 'admin' }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { state: 'notfound' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
