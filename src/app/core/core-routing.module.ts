import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { AdminComponent } from '../pages/admin/admin.component';
import { ChartsComponent } from '../pages/charts/charts.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { RoleGuard } from '../shared/guards/role.guard';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
        loadChildren: '../pages/funds/funds.module#FundsModule'
      },
      {
        path: 'statistics',
        loadChildren: '../pages/statistics/statistics.module#StatisticsModule'
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
        loadChildren: '../pages/users/users.module#UsersModule'
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
