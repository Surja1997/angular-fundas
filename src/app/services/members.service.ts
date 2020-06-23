import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMember } from '../interfaces/member';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private _url: string="../../assets/data/members.json";

  constructor(private http: HttpClient) { }

  getMembers(): Observable<IMember[]>{

    return this.http.get<IMember[]>(this._url);
  }
}
