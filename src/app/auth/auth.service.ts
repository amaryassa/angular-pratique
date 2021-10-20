import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin: boolean = false;
  constructor() {}
  login() {
    this.isLogin = true;
  }
  logout() {
    this.isLogin = false;
  }

  isLoggedIn() {
    return of(this.isLogin).pipe(delay(500));
  }

  hasPermissions() {
    return of(true);
  }
}
