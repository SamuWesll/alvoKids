import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-children',
  templateUrl: './new-children.component.html',
  styleUrls: ['./new-children.component.scss']
})
export class NewChildrenComponent implements OnInit{

  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    ) {

  }

  criarFormulario(): void {
    this.formGroup = this.formBuilder.group({
      fullname: ['', [
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

  ngOnInit(): void {
    this.criarFormulario()
  }

}
