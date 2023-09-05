import { Component, Input } from '@angular/core';
import { Location } from '@angular/common'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string | undefined;
  @Input() backButton: boolean = false;
  faArrowLeft = faArrowLeft

  constructor(private location: Location) {}

  navegateBack() {
    this.location.back()
  }
}
