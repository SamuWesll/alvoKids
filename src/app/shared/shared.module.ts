import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotImplementationComponent } from './components/not-implementation/not-implementation.component';
import { InputFieldComponent } from './components/inputs/input-field/input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ButtonSendComponent } from './components/button-send/button-send.component';

@NgModule({
  declarations: [
    NotImplementationComponent,
    InputFieldComponent,
    HeaderComponent,
    ButtonSendComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NotImplementationComponent,
    InputFieldComponent,
    HeaderComponent,
    ReactiveFormsModule,
    ButtonSendComponent,
  ]
})
export class SharedModule { }
