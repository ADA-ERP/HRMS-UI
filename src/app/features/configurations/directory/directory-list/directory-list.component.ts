import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-directory-list',
  templateUrl: './directory-list.component.html',
  styleUrls: ['./directory-list.component.scss']
})
export class DirectoryListComponent implements OnInit {

  constructor(private route:Router,private router:ActivatedRoute) { }
 
  ngOnInit(): void {
  }

  navigateToDirectory(routeName:string){
    this.route.navigate([routeName],{relativeTo:this.router});
  }
}
