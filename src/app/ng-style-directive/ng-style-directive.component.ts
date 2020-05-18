import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ng-style-directive',
  templateUrl: './ng-style-directive.component.html',
  styleUrls: ['./ng-style-directive.component.css']
})
export class NgStyleDirectiveComponent implements OnInit {

  public hasError=true
  clickStatus=true
  styleClasses={
    'color': 'blue', 'font-size': 'this.size', 'font-weight': 'bold'
  }

  color = 'pink';
  size = 16;
  displayText = 'show-class';
  visible = true;

  constructor() { }

  ngOnInit(): void {
  }

  

}
