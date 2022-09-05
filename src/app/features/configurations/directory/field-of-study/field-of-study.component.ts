import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FieldOfStudy } from 'src/app/core/models/fieldOfStudy';
import { EducationService } from 'src/app/core/services/education.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-field-of-study',
  templateUrl: './field-of-study.component.html',
  styleUrls: ['./field-of-study.component.scss']
})
export class FieldOfStudyComponent implements OnInit {

  isVisible=false;
  saving=false;
  baseUrl=environment.apiHost;
  tableFieldOfStudies:any[]=[];
  FieldOfStudies:FieldOfStudy[]=[];
  fieldOfStudySearch:string='';
  fieldOfStudyForm:FormGroup=this.fb.group({
    id:[0],
    name:['',[Validators.required]],
  })
  constructor(private fb:FormBuilder,
    private http:HttpClient,
    private educationService:EducationService,
    private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.loadFieldOfStudies();
  }

  loadFieldOfStudies(){
    this.educationService.getFieldOfStudy().subscribe(result=>this.tableFieldOfStudies=this.FieldOfStudies=result)
  }
  edit(fieldOfStudy:any){
    this.fieldOfStudyForm.setValue(fieldOfStudy);
    this.isVisible=true;
  }
  
  del(fieldOfStudy:any)
  {
    
  }

  saveFieldOfStudy()
  {
    this.saving=true;
    if(this.fieldOfStudyForm.valid)
    {
      this.educationService.addFieldOfStudy(this.fieldOfStudyForm.value).subscribe(result=>{
        this.FieldOfStudies.push(result);
        this.notification
        .create(
          'success',
          'Salary Structure',
        'SalaryStructure Created successfully!.',
      );
        
      },error=>{
        this.notification
        .create(
          'danger',
          'Salary Structure',
        'Could not save salary structure.',
      );
       },()=>{ this.isVisible=true;
        this.saving=false;
        this.fieldOfStudyForm.reset();
      });
        
    }
  }

  search(){
    if(this.fieldOfStudySearch.length>3)
    {
      this.tableFieldOfStudies =this.FieldOfStudies.filter(c=>c.name.toLocaleLowerCase().startsWith(this.fieldOfStudySearch.toLocaleLowerCase()));
      

    }else if(this.tableFieldOfStudies.length!== this.FieldOfStudies.length)
    {
      this.tableFieldOfStudies =this.FieldOfStudies;
    }

  }

  
}


