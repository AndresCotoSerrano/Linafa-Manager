import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'menu-managers', loadChildren: './menu-managers/menu-managers.module#MenuManagersPageModule' },
  { path: 'menu-admin', loadChildren: './menu-admin/menu-admin.module#MenuAdminPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
