import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    const userID: string = form.value.userID;
    const password: string = form.value.password;

    this.authService.register(userID, password);
  }
}
