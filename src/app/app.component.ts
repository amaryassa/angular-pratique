import { merge, Observable } from 'rxjs';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, mapTo } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  private _showLoaderEvents$!: Observable<boolean>;
  private _hideLoaderEvents$!: Observable<boolean>;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this._showLoaderEvents$ = this.router.events.pipe(
      filter((e) => e instanceof ResolveStart),
      mapTo(true)
    );
    this._hideLoaderEvents$ = this.router.events.pipe(
      filter((e) => e instanceof ResolveEnd),
      mapTo(false)
    );
    this.isLoading$ = merge(this._hideLoaderEvents$, this._showLoaderEvents$);
  }

  onLogin() {
    this.authService.login();
  }
  onLogout() {
    this.authService.logout();
  }

  onAddPermission() {
    this.authService.addPermission();
  }
  onRemovePermission() {
    this.authService.removePermission();
  }
}
