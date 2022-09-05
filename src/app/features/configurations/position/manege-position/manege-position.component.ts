import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Grade } from 'src/app/core/models/grade';
import { PositionService } from 'src/app/core/services/position.service';

@Component({
  selector: 'app-manege-position',
  templateUrl: './manege-position.component.html',
  styleUrls: ['./manege-position.component.scss']
})
export class ManegePositionComponent implements OnInit {

  positionFrom:FormGroup=this.fb.group({
    id:[0],
    positionCode:[,[Validators.required]],
    positionName:[,[Validators.required]],
    description:[],
    gradeId:[,[Validators.required]],
  })
  
  isLoading=false;
  deleteLoading=false;
  saving=false;
  isVisible=false;
  grades:Grade[]=[];
  constructor(
    private fb:FormBuilder,
    private route:Router,
    private router: ActivatedRoute,
    private positionService:PositionService) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    if(id && Number(id)>0)
    {
      this.positionFrom.controls['id'].setValue(Number(id));
      this.positionService.getPosition(Number(id))
      .subscribe(result=>
        {
              this.positionFrom.setValue(result)
            console.log("Position");
            console.log(result)
         });
    }
    this.positionService.getGrade().subscribe(result=>this.grades=result);
  }
  _submitForm(){
    this.saving=true;
    if(this.positionFrom.valid){
      this.positionService.addPosition(this.positionFrom.controls["gradeId"].value,this.positionFrom.value)
      .subscribe(result=>{
        if(result)this.redirectToPositionList();

        
      },e=>{console.log(e)},()=>{this.saving=false;})
    }
  }

  delete(){
    this.deleteLoading =true;
    this.positionService.deletePosition(Number(this.positionFrom.value['id']))
    .subscribe(result=>
      {
         if(result)this.redirectToPositionList();
       },e=>{
        
       },()=>{this.deleteLoading=true;  this.isVisible=false;   });
  }

  private redirectToPositionList() {
    this.route.navigate(["/configuration/position"]);
  }
}


 