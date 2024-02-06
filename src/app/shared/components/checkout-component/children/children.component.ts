import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faShareFromSquare, faCamera } from '@fortawesome/free-solid-svg-icons';
import { ChildrenModel, StatusChildren } from 'src/app/shared/model/Children.model';


@Component({
  selector: 'app-children-checkout',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent {

  faShareFromSquare = faShareFromSquare;
  faCamera = faCamera;

  @Input() children!: ChildrenModel;
  @Input() isActivated: boolean = false;
  @Input() isOldOff: boolean = false;
  @Output() funcSelect = new EventEmitter();

  selectChildren() {
    if (!this.isOldOff) {
      this.isActivated = !this.isActivated;
      this.funcSelect.emit();
    }
  }

  translateStatus() {
    const status = this.children.status;
    switch (status) {
      case StatusChildren.IN_MEET:
        return "Em sala"
      case StatusChildren.WITHDRAWN:
        return "Saída realizada"
      case StatusChildren.AWAITING_CONFIRMATION_CHECK_IN:
        return "check-in pendente"
      default:
        return "not map"
    }
  }

  constructor() {
    
  }

}
