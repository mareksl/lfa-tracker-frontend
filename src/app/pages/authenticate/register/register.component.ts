import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, User } from 'src/app/core/services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router
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

    this.authService.register(userData).subscribe((user: User) => {
      this.router.navigate([this.returnUrl]);
    });
  }
}
