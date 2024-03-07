import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubComponent } from './page/hub/hub.component';
import { LoginComponent } from './page/hub/login/login.component';
import { RegisterComponent } from './page/hub/register/register.component';
import { VisitorComponent } from './page/hub/visitor/visitor.component';
import { ParentsComponent } from './page/hub/parents/parents.component';
import { ChildrenComponent } from './page/hub/visitor/children/children.component';
import { MeetingsComponent } from './page/hub/visitor/meetings/meetings.component';
import { NewChildrenComponent } from './page/hub/visitor/new-children/new-children.component';
import { MainComponent } from './page/hub/main/main.component';
import { MainChildrenComponent } from './page/hub/main/main-children/main-children.component';
import { MainParentsComponent } from './page/hub/main/main-parents/main-parents.component';
import { MainMeetingsComponent } from './page/hub/main/main-meetings/main-meetings.component';
import { MainSettingsComponent } from './page/hub/main/main-settings/main-settings.component';
import { MainInitComponent } from './page/hub/main/main-init/main-init.component';
import { ChildrenRegisterComponent } from './page/hub/register/children-register/children-register.component';
import { ParentRegisterComponent } from './page/hub/register/parent-register/parent-register.component';
import { AdminComponent } from './page/admin/admin.component';
import { LoginAdminComponent } from './page/admin/login-admin/login-admin.component';
import { MainAdminComponent } from './page/admin/main-admin/main-admin.component';
import { HomeComponent } from './page/admin/main/home/home.component';

const routes: Routes = [
  { path:'', pathMatch: 'full', component: HubComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'parents', component: ParentsComponent },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path:'', redirectTo:'/main/*', pathMatch: 'full' },
      { path:'*', component: MainInitComponent },
      { path:'childrens', component: MainChildrenComponent },
      { path:'parents', component: MainParentsComponent },
      { path:'meetings', component: MainMeetingsComponent },
      { path:'settings', component: MainSettingsComponent },
    ]
  },
  { 
    path:'visitor', 
    component: VisitorComponent, 
    children: [
      { path:'', redirectTo:'/visitor/children', pathMatch: 'full' },
      { path:'children', component: ChildrenComponent },
      { path:'meetings', component: MeetingsComponent },
    ]
  },
  { path: 'visitor/new-children', component: NewChildrenComponent },
  { path: 'new-children', component: ChildrenRegisterComponent },
  { path: 'new-parent', component: ParentRegisterComponent },
  { 
    path: 'admin/login', component: LoginAdminComponent,
  },
  {
    path: 'admin', 
    component: MainAdminComponent,
    children: [
      { path: '', redirectTo:'/admin/*', pathMatch:'full' },
      { path:'*', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
