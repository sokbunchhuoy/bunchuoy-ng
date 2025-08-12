import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]' // Apply this directive with `appHighlight`
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('transparent');
  }

  private changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
