import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { SignupComponent } from 'src/app/signup/signup.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { HeaderComponent } from 'src/app/header/header.component';

const routes: Routes = [
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'login',
    component:LoginComponent,
    //redirectTo:HeaderComponent
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
