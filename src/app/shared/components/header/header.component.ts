import { Component, Input } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string | undefined;
  @Input() backButton: boolean = true;

  constructor(private location: Location) {}

  navegateBack() {
    this.location.back()
  }
}
