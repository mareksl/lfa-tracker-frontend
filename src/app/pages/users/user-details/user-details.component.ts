import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/services/auth/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users/users.service';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userID: number;
  user: User;

  loading: boolean;

  roles: string[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private notifService: NotificationsService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe((params: Params) => {
      this.userID = +params['id'];
      this.getUser(this.userID);
    });

    this.roles = ['super', 'admin', 'manager', 'analyst'];
  }

  getUser(id: number) {
    this.usersService.getById(id).subscribe(user => {
      this.user = user;
      this.loading = false;
    });
  }

  toggleActive() {
    this.loading = true;

    const toggleTo = !this.user.active;
    this.usersService
      .toggleActive(this.user.userID, toggleTo)
      .subscribe(user => {
        this.user = user;
        this.notifService.notify(`User ${toggleTo ? '' : 'de'}activated`, {
          status: 'success'
        });
        this.loading = false;
      });
  }

  deleteUser() {
    if (
      confirm(
        `Do you want to remove user ${this.user.userID}: ${
          this.user.firstName
        } ${this.user.lastName}?`
      )
    ) {
      this.usersService.delete(this.user.userID).subscribe(() => {
        this.notifService.notify(`User deleted`, {
          status: 'success'
        });
        this.router.navigate(['../'], { relativeTo: this.route });
      });
    }
  }

  setUserRole(role) {
    this.loading = true;
    this.usersService.setRole(this.user.userID, role).subscribe(user => {
      this.user = user;
      this.notifService.notify('User role set', {
        status: 'success'
      });
      this.loading = false;
    });
  }
}
