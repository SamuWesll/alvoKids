import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Visitor } from 'src/app/shared/model/Visitor.model';
import { ResponsibleService } from 'src/app/shared/service/responsible.service';
import { VisitorService } from 'src/app/shared/service/visitor.service';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss']
})
export class ParentsComponent implements OnInit {

  formGroup!: FormGroup;
  isVisitor?: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private visitorService: VisitorService,
    private router: Router,
    private responsibleService: ResponsibleService,
  ) {}

  criarFormulario(): void {
    this.formGroup = this.formBuilder.group({
      fullname: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      phoneNumber: ['', [
        Validators.required,
        Validators.minLength(12)
      ]],
      kinship: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
    })
  }

  handleVisitor(): void {
    const { fullname, phoneNumber, kinship} = this.formGroup.value;

    const visitor: Visitor = {
      nameParent: fullname,
      phoneNumber,
      kinship
    }

    if (this.isVisitor) {
      this.visitorService.setVisitorStorage(visitor);
      this.router.navigateByUrl('visitor');
    } else {
      this.responsibleService.responsiblePost(visitor).subscribe(result => {
        this.router.navigateByUrl('main/parents')
      }, erro => {
        alert(erro.message)
      })
    }

  }

  getVisitorLocal() {
    if (this.visitorService.getVisitorStorage()) {
      this.isVisitor = true;
    } else {
      this.isVisitor = false;
    }
  }

  ngOnInit(): void {
    this.criarFormulario();
    this.getVisitorLocal();
  }

}
