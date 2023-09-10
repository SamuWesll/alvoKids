import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomResponse } from '../../model/RoomResponse.model';
import { faDoorOpen, faDoorClosed } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  @Input() room!: RoomResponse;
  @Output() selectChildren = new EventEmitter();

  faDoorOpen = faDoorOpen;
  faDoorClosed = faDoorClosed;

  constructor() {}

  ngOnInit(): void {
  }

}
