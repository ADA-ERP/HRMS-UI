import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { GradeListComponent } from './grade/grade-list/grade-list.component';
import { PositionListComponent } from './position/position-list/position-list.component';
import { PositionComponent } from './position/position.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfigurationComponent } from './configuration.component';
import { ManegeEditGradeComponent } from './grade/manege-grade/manege-grade.component';
import { SalaryStructureComponent } from './salary-structure/salary-structure.component';
import { SalaryStructureListComponent } from './salary-structure/salary-structure-list/salary-structure-list.component';
import { ManegeEditSalaryStructureComponent } from './salary-structure/manege-salary-structure/manege-salary-structure.component';
import { GradeComponent } from './grade/grade.component';
import { ManegePositionComponent } from './position/manege-position/manege-position.component';
import { DirectoryComponent } from './directory/directory.component';
import { FieldOfStudyComponent } from './directory/field-of-study/field-of-study.component';
import { CountryComponent } from './directory/country/country.component';
import { LanguageComponent } from './directory/language/language.component';
import { DirectoryListComponent } from './directory/directory-list/directory-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConfigurationComponent,
    GradeListComponent,
    PositionListComponent,
    PositionComponent,
    ManegeEditGradeComponent,
    SalaryStructureComponent,
    SalaryStructureListComponent,
    ManegeEditSalaryStructureComponent,
    GradeComponent,
    ManegePositionComponent,
    DirectoryComponent,
    FieldOfStudyComponent,
    CountryComponent,
    LanguageComponent,
    DirectoryListComponent
  ],
  imports: [
    CommonModule,   
    SharedModule,
    CoreModule,
    FormsModule,
    ConfigurationRoutingModule
  ]
})
export class ConfigurationModule { }
