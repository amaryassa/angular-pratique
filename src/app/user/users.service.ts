import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .pipe(
        map((user) => {
          return { id: user.id, name: user.name, email: user.email };
        })
      );
  }
}
