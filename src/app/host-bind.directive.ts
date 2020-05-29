import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostBind]'
})
export class HostBindDirective {

  constructor() { }
  click=false

  @HostBinding('style.backgroundColor') bgColor
  @HostListener('click') myClick() {
    this.click=!this.click
    if(this.click==true){
      this.bgColor = 'blue';

    }
    else
    {
      this.bgColor=""
    }
    console.log("clicked")


  }

}
