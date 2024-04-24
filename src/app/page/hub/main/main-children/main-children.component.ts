import { Component, OnInit } from '@angular/core';
import { ChildrenModel } from 'src/app/shared/model/Children.model';
import { ChildrenService } from 'src/app/shared/service/children.service';
import { ErrorCustomService } from 'src/app/shared/service/error-custom.service';

@Component({
  selector: 'app-main-children',
  templateUrl: './main-children.component.html',
  styleUrls: ['./main-children.component.scss']
})
export class MainChildrenComponent implements OnInit {

  childrens: Array<ChildrenModel> = [];

  constructor(
    private childrenService: ChildrenService,
    private errorCustom: ErrorCustomService,
    ) {}

  findChildren() {
    this.childrenService.getChildren().subscribe(result => {
      this.childrens = result;
    }, error => {
      this.errorCustom.validationErrorMember(error);
    })
  }

  ngOnInit(): void {
    this.findChildren();
  }

}
