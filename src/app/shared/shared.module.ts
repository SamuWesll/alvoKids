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
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { InputDateComponent } from './components/inputs/input-date/input-date.component';
import { InputToggleComponent } from './components/inputs/input-toggle/input-toggle.component';
import { CardChildrenComponent } from './components/card-children/card-children.component';

@NgModule({
  declarations: [
    NotImplementationComponent,
    InputFieldComponent,
    HeaderComponent,
    ButtonSendComponent,
    InputPhoneComponent,
    NavbarVisitorComponent,
    ButtonAddComponent,
    InputDateComponent,
    InputToggleComponent,
    CardChildrenComponent,
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
    ButtonAddComponent,
    InputDateComponent,
    InputToggleComponent,
    CardChildrenComponent
  ]
})
export class SharedModule { }
