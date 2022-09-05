import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grade } from 'src/app/core/models/grade';
import { PositionService } from 'src/app/core/services/position.service';

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.scss']
})
export class GradeListComponent implements OnInit {
grades:Grade[]=[];
  isVisibleTop=false;
  constructor(private router:Router,private route:ActivatedRoute,private positionService:PositionService) { }

  ngOnInit(): void {
    this.positionService.getGrade().subscribe(result=>{
      this.grades=result;
    })
  }
  edit(grade:Grade){
    this.router.navigate(['grade',grade.id],{relativeTo:this.route});
  }
  del(grade:Grade){

  }
}
