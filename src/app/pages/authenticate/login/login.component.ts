import { Component, OnInit } from '@angular/core';
import { AuthService, User } from 'src/app/core/services/auth/auth.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/']);
    }
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(form: NgForm) {
    const userID: string = form.value.userID;
    const password: string = form.value.password;

    this.authService.logIn(userID, password).subscribe((user: User) => {
      this.router.navigate([this.returnUrl]);
    });
  }
}
