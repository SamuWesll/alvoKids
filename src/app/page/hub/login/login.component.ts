import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;

  criarFormulario(): void {
    this.formGroup = this.formBuilder.group({
      login: ['', [
        Validators.required,
        Validators.minLength(10)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(10)
      ]],
    })
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

}
