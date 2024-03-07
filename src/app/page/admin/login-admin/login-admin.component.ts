import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

  form!: FormGroup;
  faArrow = faArrowRight;

  criarFormulario(): void {
    this.form = this.formBuilder.group({
      login: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
    })
  }

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  submit() {
    
  }

}
