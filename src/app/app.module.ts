import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PanelComponent } from './pages/dashboard/panel/panel.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { FundsComponent } from './pages/funds/funds.component';
import { HttpClientModule } from '@angular/common/http';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { AdminComponent } from './pages/admin/admin.component';
import { TotalPieChartComponent } from './pages/statistics/charts/total-pie-chart/total-pie-chart.component';

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
    TotalPieChartComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
