import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-directive',
  templateUrl: './ng-class-directive.component.html',
  styleUrls: ['./ng-class-directive.component.css']
})
export class NgClassDirectiveComponent implements OnInit {

  name= "Surjashish";
  hasError= true;
  isSpecial=true;
 public messageClasses= 
 {
   "success": !this.hasError,
   "danger": this.hasError,
   "special": this.isSpecial
 }

  constructor() { }

  ngOnInit(): void {
    
  }
  toggleSpecial()
  {
    this.isSpecial=!this.isSpecial
    
    return{
    'isSpecial':!this.isSpecial

    }
  }
  
 
}
