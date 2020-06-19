import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  statusOnline:boolean=true;
  products=[
    {name:'Laptop'},
    {name:'Mobile'},
    {name:'TV'},
    {name:'Washing Machine'},

  ]

}
