import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChildrenStorage } from '../../model/Children.model';
import { faCamera, faWarning, faStar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-children-room',
  templateUrl: './card-children-room.component.html',
  styleUrls: ['./card-children-room.component.scss']
})
export class CardChildrenRoomComponent {
  faCamera = faCamera;
  faWarning = faWarning;
  faStar = faStar;
  faCalendar = faCalendarAlt;

  @Input() children!: ChildrenStorage;
  @Input() isActivated: boolean = false;
  @Input() isOldOff: boolean = false;
  @Input() isVisitor: boolean = false;
  @Output() funcSelect = new EventEmitter();

  maskAge() {
    const dateBirth = new Date(this.children.birthDate)
    const age = this.calcAge(dateBirth.toISOString());

    return `${age} (${dateBirth.getDate()}/${dateBirth.getMonth()+1}/${dateBirth.getFullYear()})`;
  }

  calcAge(date: string) {
    var birthday = +new Date(date);
    return ~~((Date.now() - birthday) / (31557600000));
  }

  birthdayMonth() {
    const date = new Date();
    const dateBirth = new Date(this.children?.birthDate as string)

    return date.getMonth() == dateBirth.getMonth();
  }

  selectChildren() {
    if (!this.isOldOff) {
      this.isActivated = !this.isActivated; 
      this.funcSelect.emit();
    }
  }

  constructor() {
    
  }

}
