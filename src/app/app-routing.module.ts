import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'feedback', loadChildren: './feedback/feedback.module#FeedbackPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'social', loadChildren: './social/social.module#SocialPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'fanshop', loadChildren: './fanshop/fanshop.module#FanshopPageModule' },
  {
    path: 'abteilungen', children: [
      { path: 'badminton', loadChildren: './abteilung/badminton/badminton.module#BadmintonPageModule' },
      { path: 'basketball', loadChildren: './abteilung/basketball/basketball.module#BasketballPageModule' },
      { path: 'cheerleading', loadChildren: './abteilung/cheerleading/cheerleading.module#CheerleadingPageModule' },
      { path: 'fussball', loadChildren: './abteilung/fussball/fussball.module#FussballPageModule' },
      { path: 'gesundheitssport', loadChildren: './abteilung/gesundheitssport/gesundheitssport.module#GesundheitssportPageModule' },
      { path: 'herzsport', loadChildren: './abteilung/herzsport/herzsport.module#HerzsportPageModule' },
      { path: 'karate', loadChildren: './abteilung/karate/karate.module#KaratePageModule' },
      { path: 'leichtathletik', loadChildren: './abteilung/leichtathletik/leichtathletik.module#LeichtathletikPageModule' },
      { path: 'tennis', loadChildren: './abteilung/tennis/tennis.module#TennisPageModule' },
      { path: 'tischtennis', loadChildren: './abteilung/tischtennis/tischtennis.module#TischtennisPageModule' },
      { path: 'turnen', loadChildren: './abteilung/turnen/turnen.module#TurnenPageModule' },
      { path: 'volleyball', loadChildren: './abteilung/volleyball/volleyball.module#VolleyballPageModule' }
    ]
  },
  {
    path: 'verein', children: [
      { path: 'satzung', loadChildren: './verein/satzung/satzung.module#SatzungPageModule' },
      { path: 'vorstand', loadChildren: './verein/vorstand/vorstand.module#VorstandPageModule' },
      { path: 'vereinsportrait', loadChildren: './verein/vereinsportrait/vereinsportrait.module#VereinsportraitPageModule' }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
