import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RegisterformComponent} from './registerform/registerform.component';
import {MatCardModule} from '@angular/material/card';
import{ CanactiveguardGuard } from './service/canactiveguard.guard';
import {MatToolbarModule} from '@angular/material/toolbar';
import { from } from 'rxjs';
import { WorkhourformComponent } from './workhourform/workhourform.component';
import { MenuitemsComponent } from './menuitems/menuitems.component';
import { LoginComponent } from './login/login.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ThankyouuserComponent } from './thankyouuser/thankyouuser.component';
import { DisplaymenuComponent } from './displaymenu/displaymenu.component';



const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'home',component:HomepageComponent},
  {path: 'register', component: RegisterformComponent}, // path for the register form
  {path: 'userregister', component:UserregisterComponent},
  {path: 'addtocart', component: AddtocartComponent,canActivate:[CanactiveguardGuard]},
  {path:'workhour', component:WorkhourformComponent},// path for the workhour form 
  {path:'menuitems', component:MenuitemsComponent,canActivate:[CanactiveguardGuard]},
  {path:'login',component:LoginComponent},
  {path: 'thankyouuser',component:ThankyouuserComponent},
  {path:'thankyou',component:ThankyouComponent},
  {path: 'kitchendata/:id', component:DisplaymenuComponent},
  {path:'**' , component:HomepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


