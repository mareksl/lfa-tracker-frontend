import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { FundsComponent } from '../pages/funds/funds.component';
import { FundDetailsComponent } from '../pages/funds/fund-details/fund-details.component';
import { StatisticsComponent } from '../pages/statistics/statistics.component';
import { ChartsComponent } from '../pages/charts/charts.component';
import { AdminComponent } from '../pages/admin/admin.component';
import { RoleGuard } from '../shared/guards/role.guard';
import { UsersComponent } from '../pages/users/users.component';
import { UserDetailsComponent } from '../pages/users/user-details/user-details.component';
import { AboutComponent } from '../pages/about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivateChild: [AuthGuard],
    children: [
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
        component: FundDetailsComponent,
        data: { state: 'fund-details' }
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
        data: { state: 'statistics' }
      },
      {
        path: 'charts',
        component: ChartsComponent,
        data: { state: 'charts' }
      },
      {
        path: 'admin',
        component: AdminComponent,
        data: { state: 'admin', allowed: ['admin', 'super'] },
        canActivate: [RoleGuard]
      },
      {
        path: 'users',
        component: UsersComponent,
        data: { state: 'users', allowed: ['admin', 'super'] },
        canActivate: [RoleGuard]
      },
      {
        path: 'users/:id',
        component: UserDetailsComponent,
        data: { state: 'user-details', allowed: ['admin', 'super'] },
        canActivate: [RoleGuard]
      },
      {
        path: 'about',
        component: AboutComponent,
        data: { state: 'about' }
      },
      {
        path: '**',
        component: NotFoundComponent,
        data: { state: 'notfound' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
