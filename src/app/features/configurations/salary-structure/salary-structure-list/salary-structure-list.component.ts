import { Component, OnInit } from '@angular/core';
import { SalaryStructure } from 'src/app/core/models/salaryStructure';
import { PositionService } from 'src/app/core/services/position.service';

@Component({
  selector: 'app-salary-structure-list',
  templateUrl: './salary-structure-list.component.html',
  styleUrls: ['./salary-structure-list.component.scss']
})
export class SalaryStructureListComponent implements OnInit {
  SalaryStructures:SalaryStructure[]=[]
  constructor(private positionService:PositionService) { }
  isLoading=false;
  ngOnInit(): void {
    this.positionService.getSalaryStructure().subscribe(result=>{
      this.isLoading=true;
      this.SalaryStructures=result;
    },err=>console.log(err),()=>{this.isLoading=false;
    })
  }
  edit(salary:SalaryStructure){

  }
  del(salary:SalaryStructure){}
}
