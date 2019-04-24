import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'feedback', loadChildren: './feedback/feedback.module#FeedbackPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'social', loadChildren: './social/social.module#SocialPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'fanshop', loadChildren: './fanshop/fanshop.module#FanshopPageModule' },
  { path: 'abteilungen', loadChildren: './abteilung/abteilung.module#AbteilungPageModule' },
  { path: 'verein', loadChildren: './verein/verein.module#VereinPageModule' },
  { path: 'event', loadChildren: './event/event.module#EventPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
