import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Observable, fromEvent } from 'rxjs';
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

  constructor(private platform: Platform, private iab: InAppBrowser) {
    this.setSlidesPerView();
    this.slides = [
      {
        title: 'Badminton',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_Badminton.jpg',
        url: 'https://mosella-schweich.de/abteilungen/badminton/'
      }, {
        title: 'Basketball',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_Basketball.jpg',
        url: 'https://mosella-schweich.de/abteilungen/basketball/'
      }, {
        title: 'Cheerleading',
        imgSrc: '/assets/cheerleading_schweich.jpg',
        url: 'https://mosella-schweich.de/abteilungen/turnen/cheerleading/'
      }, {
        title: 'Fußball',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_fussball.jpg',
        url: 'https://mosella-schweich.de/abteilungen/fussball/'
      }, {
        title: 'Gesundheitssport',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_gesundheitssport.jpg',
        url: 'https://mosella-schweich.de/abteilungen/gesundheitssport/'
      }, {
        title: 'Herzsport',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_herzsport.jpg',
        url: 'https://mosella-schweich.de/abteilungen/herzsport/'
      }, {
        title: 'Karate',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_karate.jpg',
        url: 'https://mosella-schweich.de/abteilungen/karate/'
      }, {
        title: 'Leichtathletik',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_leichtathletik.jpg',
        url: 'https://mosella-schweich.de/abteilungen/leichtathletik/'
      }, {
        title: 'Tennis',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_Tennis.jpg',
        url: 'https://mosella-schweich.de/abteilungen/tennis/'
      }, {
        title: 'Tischtennis',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_tischtennis.jpg',
        url: 'https://mosella-schweich.de/abteilungen/tischtennis/'
      }, {
        title: 'Turnen',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_turnen.jpg',
        url: 'https://mosella-schweich.de/abteilungen/turnen/'
      }, {
        title: 'Volleyball',
        imgSrc: '/assets/TuS_Mosella_Schweich_EV_volleyball.jpg',
        url: 'https://mosella-schweich.de/abteilungen/volleyball/'
      }
    ];
  }

  private setSlidesPerView() {
    if (this.platform.width() > 420) {
      this.slideOpts.slidesPerView = 2;
    } else if (this.platform.width() > 380) {
      this.slideOpts.slidesPerView = 1.8;
    } else if (this.platform.width() > 340) {
      this.slideOpts.slidesPerView = 1.6;
    } else {
      this.slideOpts.slidesPerView = 1.4;
    }
  }

  openWebpage(url: string): void {
    const browser = this.iab.create(url);
  }

}
