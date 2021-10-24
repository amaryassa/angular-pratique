import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  login: boolean = true;
  loginWithoutDetectChanges: boolean = true;
  constructor(
    private authService: AuthService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe((data) => {
      this.login = data;
      this.ref.detectChanges();
    });
    this.authService.isLoggedIn().subscribe((data) => {
      this.loginWithoutDetectChanges = data;
    });
  }

  executeFunction() {
    console.log('executing child');
    return 'Hello From Child';
  }
}
