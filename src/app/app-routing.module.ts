import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { FormGuard } from './auth/form.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: WelcomeComponent,
    children: [
      {
        path: 'add-user',
        component: AddUserComponent,
        canDeactivate: [FormGuard],
      },
      {
        path: 'add-product',
        component: AddProductComponent,
        canDeactivate: [FormGuard],
      },
    ],
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
