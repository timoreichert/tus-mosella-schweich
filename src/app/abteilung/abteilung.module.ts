import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AbteilungPage } from './abteilung.page';

const routes: Routes = [
  {
    path: '',
    component: AbteilungPage,
  },
  { path: 'badminton', loadChildren: './badminton/badminton.module#BadmintonPageModule' },
  { path: 'basketball', loadChildren: './basketball/basketball.module#BasketballPageModule' },
  { path: 'cheerleading', loadChildren: './cheerleading/cheerleading.module#CheerleadingPageModule' },
  { path: 'fussball', loadChildren: './fussball/fussball.module#FussballPageModule' },
  { path: 'gesundheitssport', loadChildren: './gesundheitssport/gesundheitssport.module#GesundheitssportPageModule' },
  { path: 'herzsport', loadChildren: './herzsport/herzsport.module#HerzsportPageModule' },
  { path: 'karate', loadChildren: './karate/karate.module#KaratePageModule' },
  { path: 'leichtathletik', loadChildren: './leichtathletik/leichtathletik.module#LeichtathletikPageModule' },
  { path: 'tennis', loadChildren: './tennis/tennis.module#TennisPageModule' },
  { path: 'tischtennis', loadChildren: './tischtennis/tischtennis.module#TischtennisPageModule' },
  { path: 'turnen', loadChildren: './turnen/turnen.module#TurnenPageModule' },
  { path: 'volleyball', loadChildren: './volleyball/volleyball.module#VolleyballPageModule' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AbteilungPage]
})
export class AbteilungPageModule { }
