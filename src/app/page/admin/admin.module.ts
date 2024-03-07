import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { HomeComponent } from './main/home/home.component';



@NgModule({
  declarations: [
    AdminComponent,
    LoginAdminComponent,
    MainAdminComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class AdminModule { }
