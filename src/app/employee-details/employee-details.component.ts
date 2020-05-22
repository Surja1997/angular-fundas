import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employees=[];

  constructor(private _employeeService: EmployeeService) { }


  ngOnInit(): void {
    this.employees=this._employeeService.getEmployees();

  }

}
