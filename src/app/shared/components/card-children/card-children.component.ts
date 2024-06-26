import { Component, Input } from '@angular/core';
import { ChildrenStorage } from '../../model/Children.model';
import { faCamera, faWarning, faStar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-children',
  templateUrl: './card-children.component.html',
  styleUrls: ['./card-children.component.scss']
})
export class CardChildrenComponent {

  @Input() children: ChildrenStorage | undefined;
  @Input() isVisitor = false;

  faCamera = faCamera;
  faWarning = faWarning;
  faStar = faStar;
  faCalendar = faCalendarAlt;

  constructor() { }

  maskAge() {
    const dateBirth = new Date(this.children?.birthDate as string)
    dateBirth.setDate(dateBirth.getDate() + 1)
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

}
