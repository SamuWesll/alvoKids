import { Component, OnInit } from '@angular/core';
import { ParentModel } from 'src/app/shared/model/Parent.model';
import { ResponsibleService } from 'src/app/shared/service/responsible.service';

@Component({
  selector: 'app-main-parents',
  templateUrl: './main-parents.component.html',
  styleUrls: ['./main-parents.component.scss']
})
export class MainParentsComponent implements OnInit {

  parents: Array<ParentModel> = [];

  constructor(private responsibleService: ResponsibleService) {}

  findResponsible() {
    this.responsibleService.responsibleGet().subscribe(result => {
      this.parents = result;
    })
  }

  ngOnInit(): void {
    this.findResponsible()
  }

}
