import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './core/footer/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthenticateComponent } from './pages/authenticate/authenticate.component';
import { LoginComponent } from './pages/authenticate/login/login.component';
import { RegisterComponent } from './pages/authenticate/register/register.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PanelComponent } from './pages/dashboard/panel/panel.component';
import { FundDetailsComponent } from './pages/funds/fund-details/fund-details.component';
import { FundsAdvancedSearchComponent } from './pages/funds/funds-advanced-search/funds-advanced-search.component';
import { FundsListItemComponent } from './pages/funds/funds-list/funds-list-item/funds-list-item.component';
import { FundsListComponent } from './pages/funds/funds-list/funds-list.component';
import { FundsPaginationComponent } from './pages/funds/funds-pagination/funds-pagination.component';
import { FundsComponent } from './pages/funds/funds.component';
import { StatisticsByAssigneeComponent } from './pages/statistics/statistics-by-assignee/statistics-by-assignee.component';
import { StatisticsByDepartmentComponent } from './pages/statistics/statistics-by-department/statistics-by-department.component';
import { StatisticsByRankComponent } from './pages/statistics/statistics-by-rank/statistics-by-rank.component';
import { StatisticsByUniverseComponent } from './pages/statistics/statistics-by-universe/statistics-by-universe.component';
import { StatisticsItemComponent } from './pages/statistics/statistics-item/statistics-item.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { TotalStatisticsComponent } from './pages/statistics/total-statistics/total-statistics.component';
import { ButtonOpenComponent } from './shared/components/button-open/button-open.component';
import { LineChartComponent } from './shared/components/charts/line-chart/line-chart.component';
import { TotalPieChartComponent } from './shared/components/charts/total-pie-chart/total-pie-chart.component';
import { LoadingOverlayComponent } from './shared/components/loading-overlay/loading-overlay.component';
import { MultiSelectComponent } from './shared/components/multi-select/multi-select.component';
import { ProgressBarComponent } from './shared/components/progress-bar/progress-bar.component';
import { ClickOutsideDirective } from './shared/directives/click-outside.directive';
import { PercentageColorDirective } from './shared/directives/percentage-color.directive';
import { MainComponent } from './core/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    PanelComponent,
    SidebarComponent,
    FundsComponent,
    StatisticsComponent,
    AdminComponent,
    TotalPieChartComponent,
    FundsListComponent,
    FundsListItemComponent,
    BreadcrumbsComponent,
    FundDetailsComponent,
    NotFoundComponent,
    FundsPaginationComponent,
    ClickOutsideDirective,
    FundsAdvancedSearchComponent,
    PercentageColorDirective,
    ProgressBarComponent,
    TotalStatisticsComponent,
    StatisticsByRankComponent,
    StatisticsByDepartmentComponent,
    StatisticsByAssigneeComponent,
    ChartsComponent,
    LineChartComponent,
    StatisticsByUniverseComponent,
    StatisticsItemComponent,
    ButtonOpenComponent,
    LoadingOverlayComponent,
    MultiSelectComponent,
    AuthenticateComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    AboutComponent,
    DropdownComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
