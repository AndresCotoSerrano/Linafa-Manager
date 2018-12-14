import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JornadasPublicationsPage } from './jornadas-publications.page';

const routes: Routes = [
  {
    path: '',
    component: JornadasPublicationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JornadasPublicationsPage]
})
export class JornadasPublicationsPageModule {}
