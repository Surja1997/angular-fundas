import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predefined-directives',
  templateUrl: './predefined-directives.component.html',
  styleUrls: ['./predefined-directives.component.css']
})
export class PredefinedDirectivesComponent implements OnInit {

  displayMsg=false;
  message="You have successfully logged in";
  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
    this.displayMsg=true;
  }
}
