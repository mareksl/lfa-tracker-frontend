import { Component, OnInit } from '@angular/core';
import { config } from './config/app-settings.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navVisible: boolean;

  constructor() {}

  ngOnInit() {
    this.navVisible = true;
  }

  toggleNav() {
    this.navVisible = !this.navVisible;
  }

  onResize(event) {
    if (event.target.innerWidth < config.breakpointWidth) {
      this.navVisible = false;
    }
  }

  clickOutside() {
    if (window.innerWidth < config.breakpointWidth) {
      this.navVisible = false;
    }
  }
}
