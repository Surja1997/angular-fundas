import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextModify]'
})
export class TextModifyDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color="red";
    el.nativeElement.style.backgroundColor="black";
    el.nativeElement.style.textAlign="center"


  }

}
