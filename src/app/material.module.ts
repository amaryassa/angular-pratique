import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const MaterialComponents = [
  BrowserModule,
  MatToolbarModule,
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
