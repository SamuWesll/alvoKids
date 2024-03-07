import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { HomeComponent } from './main/home/home.component';
import { PermissionComponent } from './main/permission/permission.component';
import { ChildrenAdminComponent } from './main/children-admin/children-admin.component';
import { MeetAdminComponent } from './main/meet-admin/meet-admin.component';
import { RoomAdminComponent } from './main/room-admin/room-admin.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AdminComponent,
    LoginAdminComponent,
    MainAdminComponent,
    HomeComponent,
    PermissionComponent,
    ChildrenAdminComponent,
    MeetAdminComponent,
    RoomAdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule
  ]
})
export class AdminModule { }
