import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  // enable this to show how hosting works
  // host: {
  //   '(mouseenter)': 'onMouseEnter()',
  //   '(mouseleave)': 'onMouseLeave()',
  // },
})
export class Highlight {
  private el = inject(ElementRef);
  constructor() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }

  // onMouseEnter() {
  //   this.highlight('red');
  // }
  // onMouseLeave() {
  //   this.highlight('');
  // }
}
