import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextModify]'
})
export class TextModifyDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    el.nativeElement.style.color="red";
    el.nativeElement.style.backgroundColor="black";
    el.nativeElement.style.textAlign="center"


  }

}
