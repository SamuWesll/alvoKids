import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() faIcon: any;
  // @Input() faIcon: IconDefinition | undefined;

  constructor() {}

  ngOnInit(): void {
    
  }

}
