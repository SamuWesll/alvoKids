import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotImplementationComponent } from './components/not-implementation/not-implementation.component';
import { InputFieldComponent } from './components/inputs/input-field/input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ButtonSendComponent } from './components/button-send/button-send.component';
import { InputPhoneComponent } from './components/inputs/input-phone/input-phone.component';
import { InputMaskModule } from '@ngneat/input-mask';
import { NavbarVisitorComponent } from './components/navbar/navbar-visitor/navbar-visitor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    NotImplementationComponent,
    InputFieldComponent,
    HeaderComponent,
    ButtonSendComponent,
    InputPhoneComponent,
    NavbarVisitorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    FontAwesomeModule,
  ],
  exports: [
    NotImplementationComponent,
    InputFieldComponent,
    HeaderComponent,
    ReactiveFormsModule,
    ButtonSendComponent,
    InputPhoneComponent,
    NavbarVisitorComponent,
    FontAwesomeModule,
  ]
})
export class SharedModule { }
