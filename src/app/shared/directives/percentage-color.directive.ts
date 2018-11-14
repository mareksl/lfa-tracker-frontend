import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appPercentageColor]'
})
export class PercentageColorDirective implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('appPercentageColor')
  percentage: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    if (this.percentage === 0) {
      this.renderer.addClass(this.el.nativeElement, 'text--danger');
    } else if (this.percentage === 1) {
      this.renderer.addClass(this.el.nativeElement, 'text--success');
    } else {
      this.renderer.addClass(this.el.nativeElement, 'text--warning');
    }
  }
}
