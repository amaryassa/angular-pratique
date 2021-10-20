import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AddProductComponent } from './add-product/add-product.component';
import { ListComponent } from './list/list.component';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    WelcomeComponent,
    AddUserComponent,
    AddProductComponent,
    ListComponent,
    ConfirmDialogComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MaterialModule],
})
export class AdminModule {}
