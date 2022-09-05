import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BehaviorSubject } from 'rxjs';
import { FieldOfStudy } from 'src/app/core/models/fieldOfStudy';
import { Grade } from 'src/app/core/models/grade';
import { SalaryStructure } from 'src/app/core/models/salaryStructure';
import { EducationService } from 'src/app/core/services/education.service';
import { PositionService } from 'src/app/core/services/position.service';

@Component({
  selector: 'app-manege-grade',
  templateUrl: './manege-grade.component.html',
  styleUrls: ['./manege-grade.component.scss']
})
export class ManegeEditGradeComponent implements OnInit {

  gradeFrom: FormGroup = this.fb.group({
    id: [0],
    name: [''],
    minExperienceRequired: [''],
    maxExperienceRequired: [''],
    salaryStructureId: [''],
    fieldOfStudyId: [''],
  })

  saving = false;
  gId = -1;
  isDeleteVisible = false;
  isLoading = false;
  salaryStructures: SalaryStructure[] = [];
  fieldOfStudy: FieldOfStudy[] = [];

  constructor(private fb: FormBuilder,
    private positionService: PositionService,
    private educationService: EducationService,
    private route: Router,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    if (id && Number(id) > 0) {
      this.gId = Number(id);
      this.positionService.getGradeById(Number(id)).subscribe(result => {
        this.gradeFrom.setValue(result);
        this.gradeFrom.controls["salaryStructureId"].setValue(1);
      });
    }
    this.positionService.getSalaryStructure().subscribe(result => { this.salaryStructures = result })
    this.educationService.getFieldOfStudy().subscribe(result => { this.fieldOfStudy = result })

  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this Grade?',
      nzContent: `<b style="color: red;">${this.gradeFrom.value['name']}  is going to be deleted</b>`,
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.delete(),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  _submitForm() {
    this.saving = true;
    if (Number(this.gradeFrom.value['id']) > 0) {
      this.positionService.updateGrade(this.gradeFrom.value['id'], this.gradeFrom.value)
        .subscribe(result => {
          if (result) {
            this.gradeFrom.reset();
            this.notification
              .create(
                'success',
                'Saving Grade',
                'Grade updated successfully!.',

              )
            this.route.navigate(['/configuration/grade']);
          }
        }, null, () => { this.saving = false; });
    } 
    else 
    {
      this.positionService.AddGrade(this.gradeFrom.value)
        .subscribe(
          result => {
            if (result) {
              this.gradeFrom.reset();
              this.notification
                .create(
                  'success',
                  'Saving Grade',
                  'Grade Created successfully!.',

                )
              this.route.navigate(['/configuration/grade',]);
            }
          }, null, () => { this.saving = false; }
        );
    }
  }
  
  delete() {
    this.positionService.deleteGrade(this.gId).subscribe(result => {
      if (result)
        this.notification.create("success", 'Grade deletion', "Grade has been deleted successfully!.")
    });
  }
}
