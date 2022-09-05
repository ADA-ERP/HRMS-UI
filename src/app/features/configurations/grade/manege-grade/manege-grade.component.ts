import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FieldOfStudy } from 'src/app/core/models/fieldOfStudy';
import { SalaryStructure } from 'src/app/core/models/salaryStructure';
import { EducationService } from 'src/app/core/services/education.service';
import { PositionService } from 'src/app/core/services/position.service';

@Component({
  selector: 'app-manege-grade',
  templateUrl: './manege-grade.component.html',
  styleUrls: ['./manege-grade.component.scss']
})
export class ManegeEditGradeComponent implements OnInit {

  gradeFrom:FormGroup = this.fb.group({
    id:[0],
    name:[''],
    minExperienceRequired: [''],
    maxExperienceRequired: [''],
    salaryStructureId: [''],
    fieldOfStudyId: [''],
  })
  saving=false;
  gId=-1;
  isVisible=false;
  isLoading = false;
  salaryStructures:SalaryStructure[]=[];
  fieldOfStudy:FieldOfStudy[]=[];
  
  constructor(private fb:FormBuilder,
    private positionService:PositionService,
    private educationService:EducationService,
    private route:Router,
    private router:ActivatedRoute) { }
  
  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    if(id && Number(id)>0)
    {
      this.positionService.getGradeById(Number(id)).subscribe(result=>{
        this.gradeFrom.setValue(result);
        this.gradeFrom.controls["salaryStructureId"].setValue(1);
      });
    }
    this.positionService.getSalaryStructure().subscribe(result=>{this.salaryStructures=result})
    this.educationService.getFieldOfStudy().subscribe(result=>{this.fieldOfStudy=result})
  
  }
  _submitForm(){
    
    if(Number(this.gradeFrom.value['id'])>0){
      this.positionService.updateGrade(this.gradeFrom.value['id'],this.gradeFrom.value).subscribe();
    }else{
      this.positionService.AddGrade(this.gradeFrom.value).subscribe();
    }
    
  }
}
