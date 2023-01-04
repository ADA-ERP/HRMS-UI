import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-basic',
  templateUrl: './employee-basic.component.html',
  styleUrls: ['./employee-basic.component.scss']
})
export class EmployeeBasicComponent implements OnInit {


isLoading: any;
salaryStructures: any;
basicInfoFrom: FormGroup=this.fb.group({
    employeeId:[],
     id: [0],
    name: [''],
    minExperienceRequired: [''],
    maxExperienceRequired: [''],
    salaryStructureId: [''],
    fieldOfStudyId: ['']
});
fieldOfStudy: any;
saving=false;
gId: any;
@Output() messageEvent = new EventEmitter<number>();
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.basicInfoFrom.controls["employeeId"].setValue("00001")
    this.basicInfoFrom.controls["employeeId"].disable()
  }
  public _submitForm() {
     this.messageEvent.next(1);
    }
    showDeleteConfirm() {
      throw new Error('Method not implemented.');
      }
}
