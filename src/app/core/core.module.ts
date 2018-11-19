import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { FundsComponent } from '../pages/funds/funds.component';
import { FundDetailsComponent } from '../pages/funds/fund-details/fund-details.component';
import { StatisticsComponent } from '../pages/statistics/statistics.component';
import { ChartsComponent } from '../pages/charts/charts.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AdminComponent } from '../pages/admin/admin.component';
import { UsersComponent } from '../pages/users/users.component';
import { UserDetailsComponent } from '../pages/users/user-details/user-details.component';
import { AboutComponent } from '../pages/about/about.component';
import { PanelComponent } from '../pages/dashboard/panel/panel.component';
import { FundsListComponent } from '../pages/funds/funds-list/funds-list.component';
import { FundsListItemComponent } from '../pages/funds/funds-list/funds-list-item/funds-list-item.component';
import { FundsPaginationComponent } from '../pages/funds/funds-pagination/funds-pagination.component';
import { FundsAdvancedSearchComponent } from '../pages/funds/funds-advanced-search/funds-advanced-search.component';
import { TotalStatisticsComponent } from '../pages/statistics/total-statistics/total-statistics.component';
import { StatisticsItemComponent } from '../pages/statistics/statistics-item/statistics-item.component';
import { StatisticsByAssigneeComponent } from '../pages/statistics/statistics-by-assignee/statistics-by-assignee.component';
import { StatisticsByDepartmentComponent } from '../pages/statistics/statistics-by-department/statistics-by-department.component';
import { StatisticsByRankComponent } from '../pages/statistics/statistics-by-rank/statistics-by-rank.component';
import { StatisticsByUniverseComponent } from '../pages/statistics/statistics-by-universe/statistics-by-universe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './footer/breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [SharedModule, CoreRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent,
    NotFoundComponent,
    // to refactor:

    DashboardComponent,
    FundsComponent,
    FundDetailsComponent,
    StatisticsComponent,
    ChartsComponent,
    AdminComponent,
    UsersComponent,
    UserDetailsComponent,
    AboutComponent,

    PanelComponent,
    FundsListComponent,
    FundsListItemComponent,
    FundsPaginationComponent,
    FundsAdvancedSearchComponent,
    TotalStatisticsComponent,
    StatisticsItemComponent,
    StatisticsByAssigneeComponent,
    StatisticsByDepartmentComponent,
    StatisticsByRankComponent,
    StatisticsByUniverseComponent,
    BreadcrumbsComponent
  ]
})
export class CoreModule {}
