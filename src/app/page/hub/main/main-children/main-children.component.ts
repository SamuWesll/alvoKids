import { Component, OnInit } from '@angular/core';
import { ChildrenModel } from 'src/app/shared/model/Children.model';
import { ChildrenService } from 'src/app/shared/service/children.service';

@Component({
  selector: 'app-main-children',
  templateUrl: './main-children.component.html',
  styleUrls: ['./main-children.component.scss']
})
export class MainChildrenComponent implements OnInit {

  childrens: Array<ChildrenModel> = [];

  constructor(
    private childrenService: ChildrenService,
    ) {}

  findChildren() {
    this.childrenService.getChildren().subscribe(result => {
      this.childrens = result;
    })
  }

  ngOnInit(): void {
    this.findChildren();
  }

}
