import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeBasicComponent } from './employee-register/employee-basic/employee-basic.component';
import { ProfileImageComponent } from './employee-register/profile-image/profile-image.component';
import { ContactComponent } from './employee-register/contact/contact.component';



@NgModule({
  declarations: [EmployeeComponent, EmployeeListComponent, EmployeeRegisterComponent, EmployeeBasicComponent, ProfileImageComponent, ContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    FormsModule,
    EmployeeRoutingModule
  ],
  exports:[
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
