import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';


@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    let url = state.url;

    return this.checkPermission(url);
  }

  checkPermission(url: string): boolean {
    if (!this.authService.isLoggedIn) {
      this.authService.redirectUrl = url;
      this.router.navigate(["/home/login"]);

      return false;
    }

    if (this.authService.hasPermission("ADMIN")) {
      return true;
    } else {
      this.router.navigate(["/"]);
      return false;
    }
  }
}
