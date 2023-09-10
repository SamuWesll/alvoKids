import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChildrenStorage } from '../../model/Children.model';
import { RoomResponse } from '../../model/RoomResponse.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  @Input() room!: RoomResponse;
  @Output() selectChildren = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

}
