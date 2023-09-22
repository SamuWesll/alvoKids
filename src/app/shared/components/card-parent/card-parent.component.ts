import { Component, Input, OnInit } from '@angular/core';
import { ParentModel } from '../../model/Parent.model';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { Visitor } from '../../model/Visitor.model';


@Component({
  selector: 'app-card-parent',
  templateUrl: './card-parent.component.html',
  styleUrls: ['./card-parent.component.scss']
})
export class CardParentComponent implements OnInit {

  @Input() parent: ParentModel | undefined;
  faCamera = faCamera;

  constructor() {}

  ngOnInit(): void {

  }

}
