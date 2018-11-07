import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, merge, of, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { AuthService, User } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

const toggleDropdown = trigger('toggleDropdown', [
  transition(':enter', [
    style({ transform: 'translateY(-200%)' }),
    animate('.4s ease', style({ transform: 'translateY(0)' }))
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0)' }),
    animate('.4s ease', style({ transform: 'translateY(-200%)' }))
  ])
]);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [toggleDropdown]
})
export class HeaderComponent implements OnInit {
  @Output()
  navToggled = new EventEmitter();
  connected: boolean;
  online$: Observable<boolean>;
  dropdownVisible: boolean;
  user: User;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.online$ = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
    );

    this.online$.subscribe(value => {
      this.connected = value;
    });

    this.dropdownVisible = false;
    this.user = <User>JSON.parse(localStorage.getItem('currentUser'));
  }

  toggleNav() {
    this.navToggled.emit();
  }

  logout() {
    this.authService.logOut().subscribe(() => {
      this.router.navigate(['/auth']);
    });
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  hideDropdown() {
    this.dropdownVisible = false;
  }
}
