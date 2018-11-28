import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  routerOn(route: string): boolean {
    return this.router.url.includes(route);
  }

  checkRole(roles: string[]) {
    const user = <User>JSON.parse(localStorage.getItem('currentUser'));
    return roles.includes(user.role);
  }
}
