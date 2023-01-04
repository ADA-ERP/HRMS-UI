import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzTableSortOrder, NzTableSortFn, NzTableFilterList, NzTableFilterFn } from 'ng-zorro-antd/table';
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
  listOfColumns=[
    {
      title: 'Grade Name',
      compare: (a: Grade, b: Grade) => a.name.localeCompare(b.name),
      priority: false
    },
    {
      title: 'Min Experience',
      compare: (a: Grade, b: Grade) => a.minExperienceRequired - b.minExperienceRequired,
      priority: 3
    },
    {
      title: 'Max Experience',
      compare: (a: Grade, b: Grade) => a.maxExperienceRequired - b.maxExperienceRequired,
      priority: 2
    }
  ];
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
