import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../models/menu';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input()
  menus: Menu[] = [];
isCollapsed: any;
  constructor() { }

  ngOnInit(): void {
  }
  mode = false;
  dark = false;
 //  [
    // {
    //   level: 1,
    //   title: 'Mail Group',
    //   icon: 'mail',
    //   open: true,
    //   selected: false,
    //   disabled: false,
    //   children: [
    //     {
    //       level: 2,
    //       title: 'Group 1',
    //       icon: 'bars',
    //       open: false,
    //       selected: false,
    //       disabled: false,
    //       children: [
    //         {
    //           level: 3,
    //           title: 'Option 1',
    //           selected: false,
    //           disabled: false
    //         },
    //         {
    //           level: 3,
    //           title: 'Option 2',
    //           selected: false,
    //           disabled: true
    //         }
    //       ]
    //     },
    //     {
    //       level: 2,
    //       title: 'Group 2',
    //       icon: 'bars',
    //       selected: true,
    //       disabled: false
    //     },
    //     {
    //       level: 2,
    //       title: 'Group 3',
    //       icon: 'bars',
    //       selected: false,
    //       disabled: false
    //     }
    //   ]
    // },
    // {
    //   level: 1,
    //   title: 'Team Group',
    //   icon: 'team',
    //   open: false,
    //   selected: false,
    //   disabled: false,
    //   children: [
    //     {
    //       level: 2,
    //       title: 'User 1',
    //       icon: 'user',
    //       selected: false,
    //       disabled: false
    //     },
    //     {
    //       level: 2,
    //       title: 'User 2',
    //       icon: 'user',
    //       selected: false,
    //       disabled: false
    //     }
    //   ]
   // }
 // ];
}
