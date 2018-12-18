import { NgModule } from '@angular/core';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { StatisticsComponent } from './statistics.component';
import { TotalStatisticsComponent } from './total-statistics/total-statistics.component';
import { StatisticsItemComponent } from './statistics-item/statistics-item.component';
import { StatisticsByAssigneeComponent } from './statistics-by-assignee/statistics-by-assignee.component';
import { StatisticsByDepartmentComponent } from './statistics-by-department/statistics-by-department.component';
import { StatisticsByRankComponent } from './statistics-by-rank/statistics-by-rank.component';
import { StatisticsByUniverseComponent } from './statistics-by-universe/statistics-by-universe.component';
import { TotalStatisticsListComponent } from './total-statistics/total-statistics-list/total-statistics-list.component';

@NgModule({
  imports: [SharedModule, StatisticsRoutingModule, FormsModule],
  declarations: [
    StatisticsComponent,
    TotalStatisticsComponent,
    StatisticsItemComponent,
    StatisticsByAssigneeComponent,
    StatisticsByDepartmentComponent,
    StatisticsByRankComponent,
    StatisticsByUniverseComponent,
    TotalStatisticsListComponent
  ]
})
export class StatisticsModule {}
