import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GesundheitssportPage } from './gesundheitssport.page';

const routes: Routes = [
  {
    path: '',
    component: GesundheitssportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GesundheitssportPage]
})
export class GesundheitssportPageModule {}
