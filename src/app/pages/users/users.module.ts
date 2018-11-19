import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [SharedModule, UsersRoutingModule],
  declarations: [UsersComponent, UserDetailsComponent]
})
export class UsersModule {}
