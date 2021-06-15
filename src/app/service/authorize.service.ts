import { Injectable } from '@angular/core';
import {of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {
 private isloggedIn: boolean;
 private username: string | undefined;
 private password: string | undefined;

  constructor() {
    this.isloggedIn=false;
   }

   login(username: string, password: string)
   {
     this.isloggedIn=true;
     this.username=username;
     this.password=password;
     return of(this.isloggedIn);
   }
   //this is user login test
   isUserLoggedIn(): boolean{
     if(this.username=='tnh53' && this.password== '123')
     {
       return true;
     }
     return false;
     //return this.isloggedIn;
   }
   //this is for admin 
   isAdminUser(): boolean{
    if (this.username=='admin' && this.password == '456') {
      return true; 
  }
  return false;
  
   }
   logoutUser():void{
     this.isloggedIn = false;
   }

}
