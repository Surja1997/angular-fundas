import { Component, OnInit } from '@angular/core';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  public members=[];

  constructor(private _membersService: MembersService) { }

  ngOnInit(): void {
    this._membersService.getMembers()
    .subscribe(data => this.members=data);
  }

}
