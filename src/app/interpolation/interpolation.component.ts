import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  name: any
  nameExists=false
  disabled=false
  message:String=""
  message2:String=""

  
  constructor() { }

  ngOnInit(): void {
  }
  submit(value)
  {
    console.log(value)
    // this.name=value
    this.nameExists=true
    this.disabled=true
    // return this.name
  }
  submit2(value2)
  {
    this.message=value2
    console.log(this.message)
    this.message2=value2
  }

}
