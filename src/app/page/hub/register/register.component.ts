import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/shared/service/member.service';
import { StorageService } from 'src/app/shared/service/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private memberService: MemberService,
    private route: Router,
    private storageService: StorageService
    ) {
    this.criarFormulario()
  }

  ngOnInit(): void {
    
  }

  criarFormulario(): void {
    this.formGroup = this.formBuilder.group({
      nameFamily: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      login: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      firstPassword: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      secondPassword: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
    })
  }

  handleVisitor() {
    const { firstPassword, secondPassword } = this.formGroup.value;

    if (this.validatedPassword(firstPassword, secondPassword)) {
      this.createLogin();
    } else {
      alert("A confirmação da senha esta divergente da senha digitada!")
    }
  }

  validatedPassword(firstPassword: string, secondPassword: string) :boolean{
      return firstPassword == secondPassword;
  }

  createLogin() {
    const { nameFamily, login, email, firstPassword, secondPassword } = this.formGroup.value;

    this.memberService.createLogin({
      name_family: nameFamily,
      password: firstPassword,
      email,
      login,
    }).subscribe(result => {
      this.storageService.removerAll();
      this.route.navigateByUrl("/login");
    }, error => {
      alert("Ocorreu um problema para finalizar o cadastrado!")
    })
  }

}
