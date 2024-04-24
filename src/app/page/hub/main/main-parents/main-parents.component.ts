import { Component, OnInit } from '@angular/core';
import { ParentModel } from 'src/app/shared/model/Parent.model';
import { ErrorCustomService } from 'src/app/shared/service/error-custom.service';
import { ResponsibleService } from 'src/app/shared/service/responsible.service';

@Component({
  selector: 'app-main-parents',
  templateUrl: './main-parents.component.html',
  styleUrls: ['./main-parents.component.scss']
})
export class MainParentsComponent implements OnInit {

  parents: Array<ParentModel> = [];

  constructor(
    private responsibleService: ResponsibleService,
    private errorCustom: ErrorCustomService,
    ) {}

  findResponsible() {
    this.responsibleService.responsibleGet().subscribe(result => {
      this.parents = result;
    }, error => {
      this.errorCustom.validationErrorMember(error)
    })
  }

  ngOnInit(): void {
    this.findResponsible()
  }

}
