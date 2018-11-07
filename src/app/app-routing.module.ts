import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FundDetailsComponent } from './pages/funds/fund-details/fund-details.component';
import { FundsComponent } from './pages/funds/funds.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { AuthenticateComponent } from './pages/authenticate/authenticate.component';
import { LoginComponent } from './pages/authenticate/login/login.component';
import { RegisterComponent } from './pages/authenticate/register/register.component';
import { MainComponent } from './core/main/main.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AboutComponent } from './pages/about/about.component';
import { RoleGuard } from './shared/guards/role.guard';

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
        component: FundDetailsComponent
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
        path: 'about',
        component: AboutComponent,
        data: { state: 'about' }
      }
    ]
  },
  {
    path: 'auth',
    component: AuthenticateComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
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
