import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  private loggedUser: any;

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    if (username == "admin" && password == "admin") {
      return Observable.of(true).delay(1000).do(val => {
        this.isLoggedIn = true;
        this.loggedUser = {
          "role": "ADMIN"
        }
      });
    } else {
      return Observable.of(true).delay(1000).do(val => {
        this.isLoggedIn = true;
        this.loggedUser = {
          "role": "USER"
        }
      });
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    this.loggedUser = undefined;
  }

  hasPermission(permission: string) {
    return this.loggedUser.role == permission;
  }
}
