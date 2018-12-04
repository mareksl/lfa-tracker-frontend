import { Component, OnInit } from '@angular/core';
import { AuthService, User } from 'src/app/core/services/auth/auth.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private notifService: NotificationsService
  ) {}

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/']);
    }
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.errorMessage = '';
  }

  onSubmit(form: NgForm) {
    const userID: string = form.value.userID;
    const password: string = form.value.password;

    this.authService.logIn(userID, password).subscribe(
      (user: User) => {
        this.router.navigate([this.returnUrl]);
        this.notifService.notify(`Logged in as ${userID}`, {
          status: 'success'
        });
      },
      (err: string) => {
        this.errorMessage = err;
        this.notifService.notify(err, { status: 'danger' });
      }
    );
  }
}
