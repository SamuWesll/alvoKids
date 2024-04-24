import { Component } from '@angular/core';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent {

  faUser = faUserGear;

  constructor() {

  }

}
