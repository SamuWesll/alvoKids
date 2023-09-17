import { Component, OnInit } from '@angular/core';
import { ChildrenModel } from 'src/app/shared/model/Children.model';

@Component({
  selector: 'app-main-children',
  templateUrl: './main-children.component.html',
  styleUrls: ['./main-children.component.scss']
})
export class MainChildrenComponent implements OnInit {

  childrens: Array<ChildrenModel> = [
    {
      fullName: 'Meu Ben',
      surname: 'Benja',
      allergic: '',
      birthDate: Date(),
      flAllergic: false,
      flImage: false,
    }
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

}
