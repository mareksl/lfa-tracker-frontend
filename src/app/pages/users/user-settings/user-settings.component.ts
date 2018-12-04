import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/services/auth/auth.service';
import { UsersService } from 'src/app/core/services/users/users.service';
import { NgForm } from '@angular/forms';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  user: User;

  loading: boolean;

  constructor(
    private usersService: UsersService,
    private notifService: NotificationsService
  ) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.loading = true;
    this.usersService.getMe().subscribe(user => {
      this.user = user;
      this.loading = false;
    });
  }

  changePassword(form: NgForm) {
    this.loading = true;
    this.usersService
      .changePassword(form.controls['password'].value)
      .subscribe(user => {
        this.user = user;
        this.notifService.notify('Password successfully changed', {
          status: 'success'
        });
        this.loading = false;
      });
  }
}
