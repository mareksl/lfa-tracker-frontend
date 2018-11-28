import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonOpenComponent } from './components/button-open/button-open.component';
import { TotalPieChartComponent } from './components/charts/total-pie-chart/total-pie-chart.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { ChartsModule } from 'ng2-charts';
import { PercentageColorDirective } from './directives/percentage-color.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { ValidateEqualPasswordDirective } from './directives/validate-equal-password.directive';

@NgModule({
  imports: [CommonModule, ChartsModule],
  declarations: [
    ButtonOpenComponent,
    LineChartComponent,
    TotalPieChartComponent,
    DropdownComponent,
    LoadingOverlayComponent,
    MultiSelectComponent,
    ProgressBarComponent,
    ClickOutsideDirective,
    PercentageColorDirective,
    BarChartComponent,
    ValidateEqualPasswordDirective
  ],
  exports: [
    CommonModule,
    ButtonOpenComponent,
    LineChartComponent,
    TotalPieChartComponent,
    DropdownComponent,
    LoadingOverlayComponent,
    MultiSelectComponent,
    ProgressBarComponent,
    ClickOutsideDirective,
    PercentageColorDirective,
    BarChartComponent,
    ValidateEqualPasswordDirective
  ]
})
export class SharedModule {}
