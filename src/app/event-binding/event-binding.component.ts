import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  mouseEvent: {
    X: any;
    Y: any;
    type: string;
    shiftKey: boolean

  }

  constructor() { }

  ngOnInit(): void {
  }
  recordEvent(event) {
    // this.mouseEvent.X = event.clientX.value,
    // this.mouseEvent.Y = event.clientY,
    // this.mouseEvent.shiftKey = event.shiftKey,
    // this.mouseEvent.type = event.type
    console.log(event.clientX)
    // var h = document.createElement("p");
    // var t = document.createTextNode("Recorded details are: X axis "+event.clientX+", Y axis "+event.clientY+", was shift key presssed?-> "+event.shiftKey+", Event type - "+ event.type);
    // h.appendChild(t);
    // document.body.appendChild(h);
    alert("Recorded details are: X axis "+event.clientX+", Y axis "+event.clientY+", was shift key presssed?-> "+event.shiftKey+", Event type - "+ event.type)


  }

}
