import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  private initialColor: string = "#f5f5f5"
  private defaultColor: string = "#009688"
  private defaultHeight: number = 180

  @Input('appBorderCard') borderColor!: string;

  @Input() color!: string;

  @HostBinding('style.border')
  border = "solid 4px #f5f5f5";

  @HostBinding('style.height')
  height = "180px";

  @HostListener('mouseenter') onMouseEnter() {
    this.border = `solid 4px ${this.borderColor ? this.borderColor : "#009688"}`;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.border = "solid 4px #f5f5f5";
  }
}
