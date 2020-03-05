import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../user-service/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: UserService, public router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['signup']);
      return false;
    }
    return true;
  }

}