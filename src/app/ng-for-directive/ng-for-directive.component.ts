import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  templateUrl: './ng-for-directive.component.html',
  styleUrls: ['./ng-for-directive.component.css']
})
export class NgForDirectiveComponent implements OnInit {

  constructor() { }

  fruits = ["Banana", "Orange", "Lemon", "Peach"]
  setDisplay = false

  ngOnInit(): void {
  }
  display() {
    this.setDisplay = true
  }


}
