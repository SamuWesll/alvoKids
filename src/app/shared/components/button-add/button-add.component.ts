import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent {
  @Input() url = '';
  faPlus = faPlus;

  constructor(private router: Router) {}

  sendUrl() {
    this.router.navigateByUrl(this.url);
  }

}
