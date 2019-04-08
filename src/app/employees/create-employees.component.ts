import { Component, OnInit} from '@angular/core';

@Component({
    selector:'app-create-employees',
    templateUrl:'./create-employees.component.html',
    styleUrls:['./create-employees.component.css']
})

export class CreateEmployeesComponent implements OnInit {

    photoPreview : boolean = false;
    constructor(){}

    ngOnInit(){

    }

    showPreview(){
        this.photoPreview=!this.photoPreview
    }
    saveEmployee(empData):void{
        console.log(empData.value)
    }
}       