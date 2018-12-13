import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageModule } from './login/login.module';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'menu-managers', loadChildren: './menu-managers/menu-managers.module#MenuManagersPageModule' },
  { path: 'menu-admin', loadChildren: './menu-admin/menu-admin.module#MenuAdminPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
