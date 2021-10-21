import { AuthentificationGuard } from './auth/authentification.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormGuard } from './auth/form.guard';
import { PersmissionsGuard } from './auth/persmissions.guard';
import { ListComponent } from './admin/list/list.component';

const routes: Routes = [
  {
    path: 'admin',
    component: WelcomeComponent,
    canActivate: [AuthentificationGuard],
    children: [
      {

        path: '',
        canActivateChild: [PersmissionsGuard],
        children: [
          { path: 'add-product', component: AddProductComponent,canDeactivate: [FormGuard],
 },
          { path: 'add-user', component: AddUserComponent,canDeactivate: [FormGuard],
 },
        ],
      },
      { path: 'list', component: ListComponent },
    ],
  },
  { path: 'templateDriven', component: TemplateFormComponent },
  { path: 'reactiveForms', component: ReactiveFormsComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
