import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
        path: '/abteilungen/badminton/'
      }, {
        title: 'Basketball',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_Basketball.jpg',
        path: '/abteilungen/basketball/'
      }, {
        title: 'Cheerleading',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_Cheerleading.jpg',
        path: '/abteilungen/cheerleading/'
      }, {
        title: 'Fußball',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_fussball.jpg',
        path: '/abteilungen/fussball/'
      }, {
        title: 'Gesundheitssport',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_gesundheitssport.jpg',
        path: '/abteilungen/gesundheitssport/'
      }, {
        title: 'Herzsport',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_herzsport.jpg',
        path: '/abteilungen/herzsport/'
      }, {
        title: 'Karate',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_karate.jpg',
        path: '/abteilungen/karate/'
      }, {
        title: 'Leichtathletik',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_leichtathletik.jpg',
        path: '/abteilungen/leichtathletik/'
      }, {
        title: 'Tennis',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_Tennis.jpg',
        path: '/abteilungen/tennis/'
      }, {
        title: 'Tischtennis',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_tischtennis.jpg',
        path: '/abteilungen/tischtennis/'
      }, {
        title: 'Turnen',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_turnen.jpg',
        path: '/abteilungen/turnen/'
      }, {
        title: 'Volleyball',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_volleyball.jpg',
        path: '/abteilungen/volleyball/'
      }
    ];
  }

  getCols(): number{
    return Math.floor(this.platform.width() / 200);
  }

}
