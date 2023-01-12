import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-person',
  templateUrl: './contact-person.component.html',
  styleUrls: ['./contact-person.component.scss']
})
export class ContactPersonComponent implements OnInit {
  saving=false;
  contactPersonFrom:FormGroup = this.fb.group({
    phone:[],
    phoneTwo:[],
    email:[],
    country:[],
    kebel:[],
    worda:[],
    city:[],
    subCity:[],
    firstName:[],
    middleName:[],
    lastName:[],
  })


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  _submitForm() {
    throw new Error('Method not implemented.');
    }
}
