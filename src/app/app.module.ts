import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeesComponent } from './employees/create-employees.component';

import { EmployeeService } from './employees/employees.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';

const appRoutes:Routes = [
  {
    path: 'list',
    component: ListEmployeesComponent
  },
  {
    path: 'create',
    component: CreateEmployeesComponent
  },
  {
    path: '',
    redirectTo:'/list',
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeesComponent,
    DisplayEmployeeComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
