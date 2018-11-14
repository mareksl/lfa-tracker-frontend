import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {
  @Input()
  options: string[];

  @Input()
  selected: string[];

  @Output()
  selectedChange = new EventEmitter<string[]>();

  open: boolean;

  constructor() {}

  ngOnInit() {
    this.open = false;
  }

  toggleSelected(option: string) {
    const index = this.selected.indexOf(option);
    index > -1 ? this.selected.splice(index, 1) : this.selected.push(option);
  }

  toggleSelectAll() {
    this.selected.length === this.options.length
      ? (this.selected = [])
      : (this.selected = [...this.options]);
    this.selectedChange.emit(this.selected);
  }

  deselectAll() {
    this.selected = [];
    this.selectedChange.emit(this.selected);
  }

  isSelected(option: string) {
    return this.selected.indexOf(option) > -1;
  }

  toggleList(e: MouseEvent) {
    if (!e.ctrlKey && !e.shiftKey) {
      this.open = !this.open;
    }
  }
  closeList() {
    this.open = false;
  }

  get allSelected() {
    return this.selected.length === this.options.length;
  }
}
