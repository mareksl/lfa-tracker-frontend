import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { RoleGuard } from 'src/app/shared/guards/role.guard';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: { state: 'users', allowed: ['admin', 'super'] },
    canActivate: [RoleGuard]
  },
  {
    path: ':id',
    component: UserDetailsComponent,
    data: { state: 'user-details', allowed: ['admin', 'super'] },
    canActivate: [RoleGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
