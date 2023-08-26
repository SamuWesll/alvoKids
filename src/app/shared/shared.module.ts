import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotImplementationComponent } from './components/not-implementation/not-implementation.component';
import { InputFieldComponent } from './components/inputs/input-field/input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    NotImplementationComponent,
    InputFieldComponent,
    HeaderComponent,
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
  ]
})
export class SharedModule { }
