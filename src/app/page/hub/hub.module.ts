import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HubComponent } from './hub.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VisitorComponent } from './visitor/visitor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ParentsComponent } from './parents/parents.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildrenComponent } from './visitor/children/children.component';
import { MeetingsComponent } from './visitor/meetings/meetings.component';
import { NewChildrenComponent } from './visitor/new-children/new-children.component';

@NgModule({
  declarations: [
    HubComponent,
    LoginComponent,
    RegisterComponent,
    VisitorComponent,
    ParentsComponent,
    ChildrenComponent,
    MeetingsComponent,
    NewChildrenComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class HubModule { }
