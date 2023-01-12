import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss']
})
export class EmployeeRegisterComponent implements OnInit {

  index = 0;
  constructor(private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.onIndexChange(0)
  }



  onIndexChange(event: any): void {
    this.index = event;

    }
  
}
