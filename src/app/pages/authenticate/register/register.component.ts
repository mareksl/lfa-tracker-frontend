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
    const userID: string = form.value.userID;
    const password: string = form.value.password;

    this.authService.register(userID, password).subscribe((user: User) => {
      this.router.navigate([this.returnUrl]);
    });
  }
}
