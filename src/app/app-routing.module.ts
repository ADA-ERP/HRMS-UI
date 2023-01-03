import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './features/main-page/main-page.component';


const routes: Routes = [

  {path:'',component:MainPageComponent
  ,children:
  [
    {path:'configuration',
    loadChildren:()=>import("../app/features/configurations/configuration.module")
    .then(mod=>mod.ConfigurationModule)
    },
    {path:'employee',
    loadChildren:()=>import("../app/features/employee/employee.module")
    .then(mod=>mod.EmployeeModule)
    }
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
