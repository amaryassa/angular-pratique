import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin: boolean = false;
  permission: boolean = false;
  constructor() {}
  login() {
    this.isLogin = true;
  }
  logout() {
    this.isLogin = false;
  }
  addPermission() {
    this.permission = true;
  }
  removePermission() {
    this.permission = false;
  }

  isLoggedIn() {
    return of(this.isLogin).pipe(delay(500));
  }

  hasPermissions() {
    return of(this.permission);
  }
}
