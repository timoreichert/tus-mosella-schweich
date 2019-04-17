import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VereinsportraitPage } from './vereinsportrait.page';

const routes: Routes = [
  {
    path: '',
    component: VereinsportraitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VereinsportraitPage]
})
export class VereinsportraitPageModule {}
