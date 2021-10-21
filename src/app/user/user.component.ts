import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Component({
  selector: 'app-user',
  template: `
    <h1>User Details</h1>
    <!-- {{ user$ | async | json }} -->
    <section *ngIf="user$ | async as user; else loading" class="user-card">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
    </section>
    <ng-template #loading>
      <span>Loading...</span>
    </ng-template>
  `,
  styles: [
    `
      .user-card {
        background-color: #fafafa;
        border-radius: 5px;
        padding: 5px;
      }
    `,
  ],
})
export class UserComponent implements OnInit {
  user$!: Observable<User>;
  amar!: User;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe((data) => (this.user = <User>data));

    this.user$ = this.activatedRoute.data.pipe(map((data) => data?.user));
  }
}
