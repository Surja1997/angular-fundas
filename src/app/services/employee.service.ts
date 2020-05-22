import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return[
      {"id":1,"name":"Surjashish","age":22},
      {"id":2,"name":"Prakkash","age":32},
      {"id":3,"name":"Rakesh","age":29},
      {"id":4,"name":"Mohit","age":28},

    ]
  }
}
