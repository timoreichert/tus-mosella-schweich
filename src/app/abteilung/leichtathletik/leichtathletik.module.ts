import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeichtathletikPage } from './leichtathletik.page';

const routes: Routes = [
  {
    path: '',
    component: LeichtathletikPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeichtathletikPage]
})
export class LeichtathletikPageModule {}
