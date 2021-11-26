import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from '../services/authguardService/authguard.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private Authguardservice: AuthguardService, private router: Router) {}

  canActivate():boolean{
    if (!this.Authguardservice.gettoken()) {  
      this.router.navigateByUrl("/login");  
  }  
  return this.Authguardservice.gettoken(); 
  }
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
    
  
  
}
