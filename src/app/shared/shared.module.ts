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
import { HttpClientModule } from '@angular/common/http';
import { RoomComponent } from './components/room/room.component';
import { DividerComponent } from './components/divider/divider.component';
import { CardChildrenRoomComponent } from './components/card-children-room/card-children-room.component';

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
    RoomComponent,
    DividerComponent,
    CardChildrenRoomComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    FontAwesomeModule,
    HttpClientModule,
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
    CardChildrenComponent,
    HttpClientModule,
    RoomComponent,
    DividerComponent,
    CardChildrenRoomComponent
  ]
})
export class SharedModule { }
