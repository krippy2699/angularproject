import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizeService } from './authorize.service';

@Injectable({
  providedIn: 'root'
})
export class CanactiveguardGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthorizeService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!this.authService.isUserLoggedIn() && !this.authService.isAdminUser()){
        alert('You are not allowed to login ! Click to register now or contact the admins');
        this.router.navigate(["login"],{queryParams: {retUrl: route.url}});
        return false;
      }
    return true;
  }

  
}
