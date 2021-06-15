import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterformComponent } from './registerform/registerform.component';
import { WorkhourformComponent } from './workhourform/workhourform.component';
import { LoginComponent } from './login/login.component'
import { HomepageComponent } from './homepage/homepage.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MenuitemsComponent } from './menuitems/menuitems.component';
import {MatIconModule} from '@angular/material/icon';
import { UserregisterComponent } from './userregister/userregister.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { DisplaymenuComponent } from './displaymenu/displaymenu.component';
import { CanactiveguardGuard } from './service/canactiveguard.guard';
import { AuthorizeService } from './service/authorize.service';
import { KitchenService } from './service/kitchen.service';
import { ThankyouuserComponent } from './thankyouuser/thankyouuser.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterformComponent,
    WorkhourformComponent,
    LoginComponent,
    HomepageComponent,
    MenuitemsComponent,
    UserregisterComponent,
    AddtocartComponent,
    DisplaymenuComponent,
    ThankyouuserComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CanactiveguardGuard,AuthorizeService,KitchenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
