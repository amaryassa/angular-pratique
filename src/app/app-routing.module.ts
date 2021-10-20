import { UserListComponent } from './user/user-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserResolver } from './user/user.resolver';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  {
    path: 'users/:id',
    component: UserComponent,
    resolve: {
      user: UserResolver,
    },
    data: { user: { id: '1', name: 'amar', email: 'amar@amar.fr' } },
  },
  {
    path: 'admin',
    component: WelcomeComponent,
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
