import { AuthentificationGuard } from './auth/authentification.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'admin',
    component: WelcomeComponent,
    canActivate: [AuthentificationGuard],
    children: [
      { path: 'add-user', component: AddUserComponent },
      { path: 'add-product', component: AddProductComponent },
    ],
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
