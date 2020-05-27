import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostListen]'
})
export class HostListenDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') myClick(){
    alert("Clicked");
  }
  @HostListener('mouseover') myClick2(){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','gray');
  }
  @HostListener('mouseout') myClick3(){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','');
  }

}
