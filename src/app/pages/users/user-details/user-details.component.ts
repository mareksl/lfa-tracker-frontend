import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/services/auth/auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userID: number;
  user: User;

  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe((params: Params) => {
      this.userID = +params['id'];
      this.getUser(this.userID);
    });
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
        this.loading = false;
      });
  }
}
