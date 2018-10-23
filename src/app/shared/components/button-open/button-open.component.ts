import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-open',
  templateUrl: './button-open.component.html',
  styleUrls: ['./button-open.component.scss']
})
export class ButtonOpenComponent implements OnInit {
  @Input()
  toggled: boolean;

  @Output()
  toggledChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.toggled = !this.toggled;
    this.toggledChange.emit(this.toggled);
  }
}
