import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RegisterformComponent} from './registerform/registerform.component';
import{CanactiveguardGuard} from './service/canactiveguard.guard';
import { from } from 'rxjs';
import { WorkhourformComponent } from './workhourform/workhourform.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuitemsComponent } from './menuitems/menuitems.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { DisplaymenuComponent } from './displaymenu/displaymenu.component';
import { ThankyouuserComponent } from './thankyouuser/thankyouuser.component';
const routes: Routes = [
  {path: 'home',component:HomepageComponent},
  {path: '',component:LoginComponent},
  {path: 'register', component: RegisterformComponent}, // path for the register form
  {path: 'userregister', component:UserregisterComponent},
  {path: 'addtocart', component: AddtocartComponent,canActivate:[CanactiveguardGuard]},
  {path:'workhour', component:WorkhourformComponent}, // path for the workhour form 
  {path:'login',component:LoginComponent},
  {path: 'menuitems', component:MenuitemsComponent},
  {path: 'kitchendata/:id', component:DisplaymenuComponent },
  {path: 'thankyouuser', component: ThankyouuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


