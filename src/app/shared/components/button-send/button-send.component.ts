import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-send',
  templateUrl: './button-send.component.html',
  styleUrls: ['./button-send.component.scss']
})
export class ButtonSendComponent {

  @Output() outputZerarVariaveis = new EventEmitter<any>();
  @Input() buttonTitle = 'Buscar';
  @Input() buttonType = 'button';
  @Input() disabled = false;

  constructor() {

  }

}
