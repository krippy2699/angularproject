import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterformComponent } from './registerform/registerform.component';
import { WorkhourformComponent } from './workhourform/workhourform.component';
import { MenuitemsComponent } from './menuitems/menuitems.component';
import { LoginComponent } from './login/login.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule,FormBuilder } from '@angular/forms';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { DisplaymenuComponent} from './displaymenu/displaymenu.component';
import { ThankyouuserComponent } from './thankyouuser/thankyouuser.component';
import { CanactiveguardGuard } from './service/canactiveguard.guard';
import { AuthorizeService } from './service/authorize.service';
import { KitchenserviceService } from './service/kitchenservice.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterformComponent,
    WorkhourformComponent,
    MenuitemsComponent,
    LoginComponent,
    AddtocartComponent,
    HomepageComponent,
    UserregisterComponent,
    ThankyouComponent,
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
    MatCardModule,
    HttpClientModule,
  ],
  providers: [KitchenserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
