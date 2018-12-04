import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, User } from 'src/app/core/services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  returnUrl: string;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private notifService: NotificationsService
  ) {}

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/']);
    }
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(form: NgForm) {
    const userData = {
      userID: form.value.userID,
      password: form.value.password,
      firstName: form.value.firstName,
      lastName: form.value.lastName
    };

    this.authService.register(userData).subscribe((user: number) => {
      this.router.navigate(['../']);
      this.notifService.notify(
        `User ID ${user} registered, please await email confirming activation!`,
        { status: 'success', persistent: true }
      );
    });
  }
}
