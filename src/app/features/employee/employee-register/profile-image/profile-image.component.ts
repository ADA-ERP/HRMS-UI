import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent implements OnInit {
  avatarUrl: any;
  loading: any;
  @Input() messageEvent = new EventEmitter<number>();
  handleChange($event: NzUploadChangeParam) {
  throw new Error('Method not implemented.');
  }

  beforeUpload: ((file: NzUploadFile,fileList: NzUploadFile[]) => boolean|Observable<boolean>)|undefined;

  _next(){
    this.messageEvent.next(2);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
