import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { ChartsComponent } from '../pages/charts/charts.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AdminComponent } from '../pages/admin/admin.component';
import { AboutComponent } from '../pages/about/about.component';
import { PanelComponent } from '../pages/dashboard/panel/panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './footer/breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [SharedModule, FormsModule, ReactiveFormsModule, CoreRoutingModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent,
    NotFoundComponent,
    // to refactor:

    DashboardComponent,
    ChartsComponent,
    AdminComponent,
    AboutComponent,
    PanelComponent,
    BreadcrumbsComponent
  ]
})
export class CoreModule {}
