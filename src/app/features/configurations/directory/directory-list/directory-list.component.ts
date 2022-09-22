import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Directory{
  title:string,
  icon:string,
  description:string,
  link:string;
}
@Component({
  selector: 'app-directory-list',
  templateUrl: './directory-list.component.html',
  styleUrls: ['./directory-list.component.scss']
})
export class DirectoryListComponent implements OnInit {
  directories:Directory[]=[
    {title:'country',icon:'compass',description:'List of Countries',link:'country'},
    {title:'Field Of Study',icon:'book',description:'List of  Field of study',link:'field-of-study'},
    {title:'Employment Type',icon:'user-circle',description:'List of Employment Types',link:'employment-type'},
    {title:'Training Type',icon:'books',description:'List of Training Types',link:'training-type'},
    {title:'Language',icon:'compass',description:'List of Language',link:'language'},
    {title:'Title',icon:'compass',description:'List of Titles',link:'title'},
    {title:'Education Institution',icon:'compass',description:'List of Education Institution',link:'institution'},
    {title:'Parameter Value',icon:'Setting',description:'List of Parameter value',link:'parameter-value'},
  ]
  constructor(private route:Router,private router:ActivatedRoute) { }
 
  ngOnInit(): void {
  }

  navigateToDirectory(routeName:string){
    this.route.navigate([routeName],{relativeTo:this.router});
  }
}
