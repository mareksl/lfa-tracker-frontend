import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  routerOn(route: string): boolean {
    return this.router.url.includes(route);
  }

  checkRole() {
    const user = <User>JSON.parse(localStorage.getItem('currentUser'));
    const allowedRoles = ['super', 'admin'];
    return allowedRoles.includes(user.role);
  }
}
