import { Component, Input } from '@angular/core';
import { ChildrenStorage } from '../../model/Children.model';

@Component({
  selector: 'app-card-children-room',
  templateUrl: './card-children-room.component.html',
  styleUrls: ['./card-children-room.component.scss']
})
export class CardChildrenRoomComponent {

  @Input() children!: ChildrenStorage;

  constructor() {
    console.log(this.children)
  }

}
