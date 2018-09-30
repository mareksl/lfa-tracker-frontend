import { Component, OnInit } from '@angular/core';

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
}
