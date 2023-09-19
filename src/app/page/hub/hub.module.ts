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
import { MainComponent } from './main/main.component';
import { MainChildrenComponent } from './main/main-children/main-children.component';
import { MainMeetingsComponent } from './main/main-meetings/main-meetings.component';
import { MainSettingsComponent } from './main/main-settings/main-settings.component';
import { MainParentsComponent } from './main/main-parents/main-parents.component';
import { MainInitComponent } from './main/main-init/main-init.component';
import { ChildrenRegisterComponent } from './register/children-register/children-register.component';
import { ParentRegisterComponent } from './register/parent-register/parent-register.component';

@NgModule({
  declarations: [
    HubComponent,
    LoginComponent,
    RegisterComponent,
    VisitorComponent,
    ParentsComponent,
    ChildrenComponent,
    MeetingsComponent,
    NewChildrenComponent,
    MainComponent,
    MainChildrenComponent,
    MainMeetingsComponent,
    MainSettingsComponent,
    MainParentsComponent,
    MainInitComponent,
    ChildrenRegisterComponent,
    ParentRegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class HubModule { }
