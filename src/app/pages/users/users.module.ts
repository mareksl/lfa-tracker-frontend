import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [SharedModule, UsersRoutingModule, FormsModule],
  declarations: [UsersComponent, UserDetailsComponent, UserSettingsComponent]
})
export class UsersModule {}
