import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldOfStudy } from 'src/app/core/models/fieldOfStudy';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-field-of-study',
  templateUrl: './field-of-study.component.html',
  styleUrls: ['./field-of-study.component.scss']
})
export class FieldOfStudyComponent implements OnInit {

  isVisible=false;
  baseUrl=environment.apiHost;
  tableFieldOfStudies:any[]=[];
  FieldOfStudies:FieldOfStudy[]=[];
  fieldOfStudySearch:string='';
  fieldOfStudyForm:FormGroup=this.fb.group({
    id:[],
    name:['',[Validators.requiredTrue]],
  })
  constructor(private fb:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.loadFieldOfStudies();
  }

  loadFieldOfStudies(){
    this.http.get<FieldOfStudy[]>(`${this.baseUrl}FieldOfStudy`).subscribe(result=>this.tableFieldOfStudies=this.FieldOfStudies=result)
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
    if(this.fieldOfStudyForm.valid)
    {

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


