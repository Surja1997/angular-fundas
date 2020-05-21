import { Component, OnInit } from '@angular/core';
import { ExponentialStrengthPipe } from './exponential-strength.pipe'

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  birthday = new Date(1997, 8, 17);
  power = 5;
  factor = 1;
  message = "Angular is fun"
  pipeType: String = ""
  toggle = true; // start with true == shortDate
  person={
    'firstName':'Surjashish',
    'lastName':'Sengupta',
    'dateOfBirth':'17/09/1997'

  }

  constructor() { }

  ngOnInit(): void {
  }
  onItemChange(value) {
    console.log(" Value is : ", value);
  }

  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

}
