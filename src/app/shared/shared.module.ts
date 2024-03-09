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
import { NotRoomComponent } from './components/not-room/not-room.component';
import { NavbarMainComponent } from './components/navbar/navbar-main/navbar-main.component';
import { CardParentComponent } from './components/card-parent/card-parent.component';
import { LoadingCheckinComponent } from './components/loading-checkin/loading-checkin.component';
import { CheckoutComponentComponent } from './components/checkout-component/checkout-component.component';
import { CheckinComponentComponent } from './components/checkin-component/checkin-component.component';
import { ChildrenComponent } from './components/checkout-component/children/children.component';
import { CheckinMemberComponent } from './components/member/checkin-member/checkin-member.component';
import { CheckoutMemberComponent } from './components/member/checkout-member/checkout-member.component';
import { SelectParentComponent } from './components/select/select-parent/select-parent.component';
import { NavbarAdminComponent } from './components/navbar/navbar-admin/navbar-admin.component';
import { HeaderAdminComponent } from './components/header/header-admin/header-admin.component';
import { MatDialogModule } from '@angular/material/dialog';


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
    NotRoomComponent,
    NavbarMainComponent,
    CardParentComponent,
    LoadingCheckinComponent,
    CheckoutComponentComponent,
    CheckinComponentComponent,
    ChildrenComponent,
    CheckinMemberComponent,
    CheckoutMemberComponent,
    SelectParentComponent,
    NavbarAdminComponent,
    HeaderAdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    FontAwesomeModule,
    HttpClientModule,
    MatDialogModule,
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
    CardChildrenRoomComponent,
    NotRoomComponent,
    NavbarMainComponent,
    CardParentComponent,
    LoadingCheckinComponent,
    CheckoutComponentComponent,
    CheckinComponentComponent,
    ChildrenComponent,
    CheckinMemberComponent,
    CheckoutMemberComponent,
    SelectParentComponent,
    NavbarAdminComponent,
    HeaderAdminComponent,
    MatDialogModule
  ]
})
export class SharedModule { }
