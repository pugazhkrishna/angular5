import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employees/employees.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
  employeeRef: Employee;
  private arryIndex = 1;
  constructor( private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.employeeRef = this.employees[0]
  }

 
  nextEmployee():void{
    if(this.arryIndex <=2){
      this.employeeRef = this.employees[this.arryIndex]
      this.arryIndex ++
    }else{
      this.employeeRef = this.employees[0];
      this.arryIndex = 1
    }
  }

}
