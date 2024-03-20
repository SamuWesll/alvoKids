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
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AdminComponent,
    LoginAdminComponent,
    MainAdminComponent,
    HomeComponent,
    PermissionComponent,
    ChildrenAdminComponent,
    MeetAdminComponent,
    RoomAdminComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
  ]
})
export class AdminModule { }
