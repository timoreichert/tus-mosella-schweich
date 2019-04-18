import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VereinPage } from './verein.page';

const routes: Routes = [
  {
    path: '',
    component: VereinPage
  },
  { path: 'satzung', loadChildren: './satzung/satzung.module#SatzungPageModule' },
  { path: 'vorstand', loadChildren: './vorstand/vorstand.module#VorstandPageModule' },
  { path: 'vereinsportrait', loadChildren: './vereinsportrait/vereinsportrait.module#VereinsportraitPageModule' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VereinPage]
})
export class VereinPageModule { }
