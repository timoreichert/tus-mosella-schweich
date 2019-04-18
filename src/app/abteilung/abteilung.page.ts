import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-abteilung',
  templateUrl: './abteilung.page.html',
  styleUrls: ['./abteilung.page.scss'],
})
export class AbteilungPage {

  slides: Array<any>;
  slideOpts = {
    effect: 'slide',
    slidesPerView: 1.4
  };
  constructor(private platform: Platform) {
    this.slides = [
      {
        title: 'Badminton',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_Badminton.jpg',
        path: './badminton/'
      }, {
        title: 'Basketball',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_Basketball.jpg',
        path: './basketball/'
      }, {
        title: 'Cheerleading',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_Cheerleading.jpg',
        path: './cheerleading/'
      }, {
        title: 'Fußball',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_fussball.jpg',
        path: './fussball/'
      }, {
        title: 'Gesundheitssport',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_gesundheitssport.jpg',
        path: './gesundheitssport/'
      }, {
        title: 'Herzsport',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_herzsport.jpg',
        path: './herzsport/'
      }, {
        title: 'Karate',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_karate.jpg',
        path: './karate/'
      }, {
        title: 'Leichtathletik',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_leichtathletik.jpg',
        path: './leichtathletik/'
      }, {
        title: 'Tennis',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_Tennis.jpg',
        path: './tennis/'
      }, {
        title: 'Tischtennis',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_tischtennis.jpg',
        path: './tischtennis/'
      }, {
        title: 'Turnen',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_turnen.jpg',
        path: './turnen/'
      }, {
        title: 'Volleyball',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_volleyball.jpg',
        path: './volleyball/'
      }
    ];
  }

  getCols(): number {
    return Math.floor(this.platform.width() / 200);
  }
}