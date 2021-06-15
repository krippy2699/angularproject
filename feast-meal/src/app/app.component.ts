import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeService } from './service/authorize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feast-meal';

  constructor(private authService: AuthorizeService, 
    private router: Router){
    }
 
    logout(){
      this.authService.logoutUser();
      this.router.navigate(['home']);
      alert("Log out successfully!");
    }

}
