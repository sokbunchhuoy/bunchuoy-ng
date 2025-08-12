import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appContent]'
})
export class ContentDirective {

  constructor(private ele: ElementRef) {
  }

  @HostListener('click') onClick() {
    this.ele.nativeElement.style.color = 'red';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.color = ' orange';
  }

  @HostListener('mouseout') onMousemove() {
    this.ele.nativeElement.style.color = 'green';
  }

}
