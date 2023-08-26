import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HubComponent } from './hub.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    HubComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HubComponent
  ]
})
export class HubModule { }
