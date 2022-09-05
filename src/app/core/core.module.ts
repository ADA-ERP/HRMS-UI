import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';



@NgModule({
  
  declarations: [
    NavBarComponent,
    SideBarComponent,
    BreadCrumbComponent,
    LoginComponent
  ],
  
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],

  exports:[
    NavBarComponent,
    BreadCrumbComponent,
    SideBarComponent,         
    LoginComponent
  ]
})
export class CoreModule { }
