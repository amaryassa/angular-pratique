import { UserListComponent } from './user-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [UserComponent, UserListComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class UserModule {}
