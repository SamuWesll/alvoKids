import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubComponent } from './page/hub/hub.component';
import { LoginComponent } from './page/hub/login/login.component';
import { RegisterComponent } from './page/hub/register/register.component';
import { VisitorComponent } from './page/hub/visitor/visitor.component';
import { ParentsComponent } from './page/hub/parents/parents.component';
import { ChildrenComponent } from './page/hub/visitor/children/children.component';

const routes: Routes = [
  { path:'', pathMatch: 'full', component: HubComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'parents', component: ParentsComponent },
  { 
    path:'visitor', 
    component: VisitorComponent, 
    children: [
      { path:'', redirectTo:'/visitor/children', pathMatch: 'full' },
      { path:'children', component: ChildrenComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
