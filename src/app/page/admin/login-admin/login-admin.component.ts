import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AdminService } from 'src/app/shared/service/admin.service';

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
    private adminService: AdminService,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  submit() {
    const { login, password } = this.form.value;

    this.adminService.submitLogin(login, password).subscribe(result => {
      this.adminService.setTokenLocalStorage(result)
      this.router.navigateByUrl("admin");
    })
  }

}
