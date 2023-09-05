import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotImplementationComponent } from './components/not-implementation/not-implementation.component';
import { InputFieldComponent } from './components/inputs/input-field/input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ButtonSendComponent } from './components/button-send/button-send.component';
import { InputPhoneComponent } from './components/inputs/input-phone/input-phone.component';
import { InputMaskModule } from '@ngneat/input-mask';

@NgModule({
  declarations: [
    NotImplementationComponent,
    InputFieldComponent,
    HeaderComponent,
    ButtonSendComponent,
    InputPhoneComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
  ],
  exports: [
    NotImplementationComponent,
    InputFieldComponent,
    HeaderComponent,
    ReactiveFormsModule,
    ButtonSendComponent,
    InputPhoneComponent,
  ]
})
export class SharedModule { }
