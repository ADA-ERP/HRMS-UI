import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';


@NgModule({

  declarations: [ MainPageComponent],

  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule
  ],

  exports:[ MainPageComponent]
})
export class FeaterModule { }
