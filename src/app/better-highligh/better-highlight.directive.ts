import { Directive, ElementRef, HostListener, Renderer2, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective  implements OnInit {
  @Input() defaultColor: string = 'transparent'; 
  @Input() highlightColor: string = 'blue'; 
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
   this.backgroundColor=this.defaultColor;
  }
  @HostListener('mouseenter') onMouseEnter(enevtData: Event) {
   this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
   this.backgroundColor = this.defaultColor;
  }

 
}
