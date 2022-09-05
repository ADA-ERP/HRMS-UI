import { Component, OnInit } from '@angular/core';
import { Position } from 'src/app/core/models/position';
import { PositionService } from 'src/app/core/services/position.service';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.scss']
})
export class PositionListComponent implements OnInit {
  positions:Position[]=[]
  constructor(private positionService:PositionService) { }

  ngOnInit(): void {
    this.positionService.getPositions().subscribe(result=>this.positions=result);
  }

  edit(position:Position){}
  del(position:Position){}
}
