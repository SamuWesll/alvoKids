import { Component, Input } from '@angular/core';
import { ChildrenStorage } from '../../model/Children.model';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-not-room',
  templateUrl: './not-room.component.html',
  styleUrls: ['./not-room.component.scss']
})
export class NotRoomComponent {
  @Input() childrens!: Array<ChildrenStorage>;
  faExclamation = faExclamationTriangle;

  constructor() {}

}
