import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeBasicComponent } from './employee-register/employee-basic/employee-basic.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path:'',component:EmployeeComponent,children:[
      {path:'',component:EmployeeListComponent},
      {path:'employee-register',component:EmployeeRegisterComponent}
    ]
  }]

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class EmployeeRoutingModule { }
