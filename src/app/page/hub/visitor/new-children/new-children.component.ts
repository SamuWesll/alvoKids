import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChildrenStorage } from 'src/app/shared/model/Children.model';
import { ChildrenService } from 'src/app/shared/service/children.service';

@Component({
  selector: 'app-new-children',
  templateUrl: './new-children.component.html',
  styleUrls: ['./new-children.component.scss']
})
export class NewChildrenComponent implements OnInit{

  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private childrenService: ChildrenService,
    private router: Router,
    ) {

  }

  criarFormulario(): void {
    this.formGroup = this.formBuilder.group({
      fullName: ['', [
        Validators.required,
        Validators.minLength(10)
      ]],
      surname: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      birthDate: ['', [
        Validators.required
      ]],
      flImage: [false, [
        Validators.required
      ]],
      flAllergic: [false, [
        Validators.required
      ]],
      allergic: [{ value: '', disabled: false }],
      observation: ['', [
        Validators.maxLength(100)
      ]],
    })
  }

  disableObsAllergic(event: any) {
    
  }

  submit() {
    const { fullName, surname, birthDate, flImage, flAllergic, allergic, observation } = this.formGroup.value;
  
    const children: ChildrenStorage = {
      fullName,
      surname,
      birthDate,
      flImage,
      flAllergic,
      allergic,
      observation
    }

    this.childrenService.setVisitorStorage(children);

    this.router.navigateByUrl('/visitor/children');
  }

  ngOnInit(): void {
    this.criarFormulario()
  }

}
