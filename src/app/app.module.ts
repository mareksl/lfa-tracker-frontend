import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PanelComponent } from './pages/dashboard/panel/panel.component';
import { FundsComponent } from './pages/funds/funds.component';
import { TotalPieChartComponent } from './pages/statistics/charts/total-pie-chart/total-pie-chart.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { FundsListComponent } from './pages/funds/funds-list/funds-list.component';
import { FundsListItemComponent } from './pages/funds/funds-list/funds-list-item/funds-list-item.component';

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
    FundsListItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
