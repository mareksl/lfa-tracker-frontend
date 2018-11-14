import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [
    {
      userID: 1234567,
      role: 'analyst',
      firstName: 'Test',
      lastName: 'User',
      active: true
    },
    {
      userID: 1234567,
      role: 'analyst',
      firstName: 'Test',
      lastName: 'User',
      active: false
    }
  ];
  constructor() {}

  ngOnInit() {}
}
