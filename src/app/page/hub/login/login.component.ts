import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import { LoginService } from 'src/app/shared/service/login.service';
import { VisitorService } from 'src/app/shared/service/visitor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;
  faArrow = faArrowRight;

  criarFormulario(): void {
    this.formGroup = this.formBuilder.group({
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
    private visitorService: VisitorService,
    ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  submit() {
    const { login, password } = this.formGroup.value;
    this.loginService.submitLogin(login, password).subscribe(result => {
      this.router.navigateByUrl('main');
      this.visitorService.removeVisitor();
    }, erro => {
      alert("deu ruim")
    })
  }

}
