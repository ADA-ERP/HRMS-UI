import { Component, OnInit } from '@angular/core';
import { configMenu } from './config-menu';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  menus=configMenu.menus;
  isCollapsed=false;

  constructor() { }

  ngOnInit(): void {
  }

}
