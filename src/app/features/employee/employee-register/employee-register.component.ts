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
avatarUrl: any;
loading: any;
handleChange($event: NzUploadChangeParam) {
throw new Error('Method not implemented.');
}
  index = 0;
beforeUpload: ((file: NzUploadFile,fileList: NzUploadFile[]) => boolean|Observable<boolean>)|undefined;

  constructor(private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.onIndexChange(0)
  }



  onIndexChange(event: number): void {
    this.index = event;
    switch (this.index) {
      case 0:
        this.route.navigate(['basic-info'],{relativeTo:this.router});
        break;
      case 1:
        this.route.navigate(['contact-info'],{relativeTo:this.router});
        break;
      case 2:
        this.route.navigate(['background-info'],{relativeTo:this.router});
        break;
      case 3:
        this.route.navigate(['Employment'],{relativeTo:this.router});
        break;
      default:
        this.route.navigate(['basic-info'],{relativeTo:this.router});
        break;
    }
  }
}
