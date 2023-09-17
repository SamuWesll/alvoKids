import { Component, OnInit } from '@angular/core';
import { ParentModel } from 'src/app/shared/model/Parent.model';

@Component({
  selector: 'app-main-parents',
  templateUrl: './main-parents.component.html',
  styleUrls: ['./main-parents.component.scss']
})
export class MainParentsComponent implements OnInit {

  parents: Array<ParentModel> = [
    {
      nameParent: 'Samuel Weslley',
      kinship: 'Pai',
      phoneNumber: 11984670655,
    }
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

}
