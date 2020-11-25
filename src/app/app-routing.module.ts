import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { SignupComponent } from 'src/app/signup/signup.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
  path:'dashboard',
  component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
