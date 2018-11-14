import { Component, OnInit } from '@angular/core';
import { config } from '../../config/app-settings.config';
import {
  trigger,
  transition,
  style,
  query,
  animate,
  group
} from '@angular/animations';

const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(
      ':leave',
      style({
        position: 'absolute',
        width: '100%',
        height: '100%'
      }),
      { optional: true }
    ),
    query(
      ':enter',
      style({
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0,
        'z-index': '-1'
      }),
      { optional: true }
    ),
    group([
      query(
        ':leave',
        [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate(
            '.8s ease',
            style({ transform: 'translateX(100%)', opacity: 0 })
          )
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)', opacity: 0 }),
          animate('.8s ease', style({ transform: 'translateX(0)', opacity: 1 }))
        ],
        { optional: true }
      )
    ])
  ])
]);

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [routerTransition]
})
export class MainComponent implements OnInit {
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

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
