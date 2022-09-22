import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PositionService } from 'src/app/core/services/position.service';

@Component({
  selector: 'app-manege-salary-structure',
  templateUrl: './manege-salary-structure.component.html',
  styleUrls: ['./manege-salary-structure.component.scss']
})
export class ManegeEditSalaryStructureComponent implements OnInit {

  salaryStructureForm:FormGroup=this.fb.group({
    id:[],
    payBand:[''],
    minimum:[''],
    midpoint:[''],
    maximum:[''],
    range:[''],
    spread:[''],
    note:['']
    
  })
   strId: number =-1;
   saving=false;
   isVisible=false;
  constructor(private fb:FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private modal: NzModalService,
    private positionService:PositionService,
    private notification: NzNotificationService
  ) { }

  ngOnInit(): void {

     const id =  this.route.snapshot.paramMap.get('id');
     
    if(id && Number(id)>0)
    {
      this.strId = Number(id);
      this.positionService.getSalaryStructureById(Number(this.strId))
      .subscribe(result=>{
        this.salaryStructureForm.setValue(result);
      });
    }
    
  }
  _submitForm(){
    console.log(this.salaryStructureForm.value);
    this.saving=true;
    if(this.strId<=0)
    {
      this.positionService.createSalaryStructure(this.salaryStructureForm.value)
      .subscribe(result=>{
        if(result)
        console.log(result)
      },
      error=>{console.log(error)},
      ()=>{
        this.saving=false;
        this.notification
        .create(
          'success',
          'Salary Structure',
        'SalaryStructure Created successfully!.',
      )
        this.redirectToSalaryStructureList();

      }
      )

    }
   else
   {
    this.positionService.updateSalaryStructure(Number(this.strId),this.salaryStructureForm.value)
    .subscribe(result=>{
      if(result)
      console.log(result)
    },
    error=>{console.log(error)},
    ()=>{
      this.saving=false;
      this.notification
      .create(
        'success',
        'Salary Structure',
        'SalaryStructure updated successfully!.',
      )
      this.redirectToSalaryStructureList();

    }
    )
   }

  }
 
  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this Salary Structure?',
      nzContent: `<b style="color: red;">${this.salaryStructureForm.value['payBand']}  is going to be deleted</b>`,
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.delete(),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  delete(){
    if(this.strId>0)
    {
      this.positionService.deleteSalaryStructure(this.strId)
      .subscribe(result=>{
        if(result)
        console.log(result)
      },
      error=>{console.log(error)},
      ()=>{
        this.notification
        .create(
          'success',
          'Salary Structure',
         'SalaryStructure deleted successfully!.',
      )
       this.isVisible=false;
        this.redirectToSalaryStructureList();

      }
      )

    }
  }

  public redirectToSalaryStructureList() {
    this.redirectToSalaryStructureList();
  }
}
