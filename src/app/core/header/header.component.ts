import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, merge, of, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  navToggled = new EventEmitter();
  connected: boolean;
  online$: Observable<boolean>;

  constructor() {}

  ngOnInit() {
    this.online$ = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
    );

    this.online$.subscribe(value => {
      this.connected = value;
    });
  }

  toggleNav() {
    this.navToggled.emit();
  }
}
