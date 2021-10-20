import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'resume-angular';
  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login();
  }
  onLogout() {
    this.authService.logout();
  }
}
