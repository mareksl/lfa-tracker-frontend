import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: User;
  constructor() {}

  ngOnInit() {
    this.user = <User>JSON.parse(localStorage.getItem('currentUser'));
  }
}
