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
  @Input() qtdChildrenSelected!: number;
  @Input() isVisitor = false;
  @Output() selectChildren = new EventEmitter();

  faDoorOpen = faDoorOpen;
  faDoorClosed = faDoorClosed;

  select(children: any) {
    this.selectChildren.emit(children);
  }

  constructor() {}

  ngOnInit(): void {
  }

  getVacancies() {
    // return this.room.available_vacancies - this.qtdChildrenSelected;
    return this.room.available_vacancies;
  }

}
