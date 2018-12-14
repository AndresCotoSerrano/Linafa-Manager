import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JornadaReviewPage } from './jornada-review.page';

const routes: Routes = [
  {
    path: '',
    component: JornadaReviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JornadaReviewPage]
})
export class JornadaReviewPageModule {}
