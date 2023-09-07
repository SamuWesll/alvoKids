import { Component, OnInit } from '@angular/core';
import { ChildrenStorage } from 'src/app/shared/model/Children.model';
import { ChildrenService } from 'src/app/shared/service/children.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {

  childrens: ChildrenStorage[] = [];

  constructor(private childrenService: ChildrenService) {}

  getChildrens() {
    this.childrens = this.childrenService.getVisitorStorage() as unknown as ChildrenStorage[];
  }

  ngOnInit(): void {
    this.getChildrens();
  }

}
