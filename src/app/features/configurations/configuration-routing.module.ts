import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './configuration.component';
import { CountryComponent } from './directory/country/country.component';
import { DirectoryListComponent } from './directory/directory-list/directory-list.component';
import { DirectoryComponent as DirectoryComponent } from './directory/directory.component';
import { FieldOfStudyComponent } from './directory/field-of-study/field-of-study.component';
import { LanguageComponent } from './directory/language/language.component';
import { ManegeEditGradeComponent } from './grade/manege-grade/manege-grade.component';
import { GradeListComponent } from './grade/grade-list/grade-list.component';
import { GradeComponent } from './grade/grade.component';
import { ManegePositionComponent } from './position/manege-position/manege-position.component';
import { PositionListComponent } from './position/position-list/position-list.component';
import { PositionComponent } from './position/position.component';
import { ManegeEditSalaryStructureComponent } from './salary-structure/manege-salary-structure/manege-salary-structure.component';
import { SalaryStructureListComponent } from './salary-structure/salary-structure-list/salary-structure-list.component';
import { SalaryStructureComponent } from './salary-structure/salary-structure.component';

const routes: Routes = [
 
  {
    path: '', component: ConfigurationComponent, children: [

      {
        path: 'grade', component: GradeComponent,
        children: [
          { path: '', component: GradeListComponent },
          { path: 'grade-list', component: GradeListComponent },
          { path: 'grade/:id', component: ManegeEditGradeComponent },
          { path: 'position-list', component: PositionListComponent },
          { path: 'position-create', component: PositionListComponent },
          { path: "salary-structure-list", component: SalaryStructureListComponent },
          { path: "salary-structure-create/:id", component: ManegeEditSalaryStructureComponent }
        ]
      },

      {
        path: 'position', component: PositionComponent,
        children: [
          { path: '', component: PositionListComponent },
          { path: 'position-list', component: PositionListComponent },
          { path: 'position-create/:id', component: ManegePositionComponent },
        ]
      },

      {
        path: 'salary-structure', component: SalaryStructureComponent,
        children: [
          { path: '', component: SalaryStructureListComponent },
          { path: "salary-structure-list", component: SalaryStructureListComponent },
          { path: "salary-structure-create/:id", component: ManegeEditSalaryStructureComponent }
        ]
      },

      {
        path: 'directory', component: DirectoryComponent,
        children: [
           { path: '', component: DirectoryListComponent },
           { path: 'directory-list', component: DirectoryListComponent },
           { path: 'country', component: CountryComponent },
           { path: 'field-of-study', component: FieldOfStudyComponent },
           { path: 'language', component: LanguageComponent },

          
        ]
      },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
