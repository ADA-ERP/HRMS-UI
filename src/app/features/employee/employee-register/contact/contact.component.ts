import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
saving=false;
_submitForm() {
throw new Error('Method not implemented.');
}
contactFrom: FormGroup =this.fb.group({
  phone:[],
  phoneTwo:[],
  email:[],
  country:[],
  kebel:[],
  worda:[],
  city:[],
  subCity:[],
  currentCountry:[],
  currentKebel:[],
  currentWorda:[],
  currentCity:[],
  currentSubCity:[],

});

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
