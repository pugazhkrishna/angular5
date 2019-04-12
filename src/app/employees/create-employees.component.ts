import { Component, OnInit} from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employees/employees.service';
import { Router } from '@angular/router'

@Component({
    selector:'app-create-employees',
    templateUrl:'./create-employees.component.html',
    styleUrls:['./create-employees.component.css']
})

export class CreateEmployeesComponent implements OnInit {

    photoPreview : boolean = false;
    employee: Employee= {
        id:null,
        name:null,
        gender:null,
        email:null,
        phoneNumber:null,
        contactPreference:null,
        dateOfBirth:null,
        department:null,
        isActive:null,
        photoPath:null
    }

    constructor( private _employeeService: EmployeeService,
                 private _route: Router
                ){}

    ngOnInit(){

    }

    showPreview(){
        this.photoPreview=!this.photoPreview
    }
    saveEmployee():void{
        this._employeeService.save(this.employee);
        this._route.navigate(['list']);
    }
}       