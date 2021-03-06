import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { RoleGuard } from 'src/app/shared/guards/role.guard';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: { state: 'users', allowed: ['super'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'me',
    component: UserSettingsComponent,
    data: { state: 'user-settings' }
  },
  {
    path: ':id',
    component: UserDetailsComponent,
    data: { state: 'user-details', allowed: ['super'] },
    canActivate: [RoleGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
