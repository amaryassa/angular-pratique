import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  RouterState,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UrlTree } from '@angular/router';
import { AddProductComponent } from '../admin/add-product/add-product.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../admin/confirm-dialog/confirm-dialog.component';
import { SaveData } from './save-data.interface';

@Injectable({
  providedIn: 'root',
})
export class FormGuard implements CanDeactivate<SaveData> {
  constructor(private dialog: MatDialog) {}
  canDeactivate(
    component: SaveData,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('FormGuard trigger....');
    console.log('currentRoute', currentRoute);
    console.log('currentState', currentState);
    console.log('nextState', nextState);
    if (!component.isDataSaved()) {
      console.log(component.isDataSaved());
      const dialogRef = this.dialog.open(ConfirmDialogComponent);
      return dialogRef.afterClosed();
    }
    return of(true);
  }
}
