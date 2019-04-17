import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-vorstand',
  templateUrl: './vorstand.page.html',
  styleUrls: ['./vorstand.page.scss'],
})
export class VorstandPage implements OnInit {

  slides: Array<any>;
  slideOpts = {
    effect: 'slide',
    slidesPerView: 1.2
  };

  constructor(private platform: Platform) {
    this.slides = [
      {
        title: '1. Vorsitzender',
        name: 'Bernd Münchgesang',
        imgSrc: '/assets/bernd_münchgesang.jpg',
        url: 'https://mosella-schweich.de/vereinsportrait/vorstand/bernd-muenchgesang/',
        tasks: [
          'Vorsitzender Ehrungsausschuss',
          'Ansprechpartner bei Verbände',
          'Repräsentation des Vereins'
        ]
      }, {
        title: '2. Vorsitzender',
        name: 'Harald Emmrich',
        imgSrc: '/assets/harald_emmrich.jpg',
        url: 'https://mosella-schweich.de/vereinsportrait/vorstand/harald-emmrich/',
        tasks: [
          'Öffentlichkeitsarbeit',
          'Unterstützung der Geschäftsführer',
          'Verwaltung und Abschluss Übungsleiterverträge',
          'Verteilung Post/Emails',
          'Protokollierung Vorstandssitzungen'
        ]
      }, {
        title: 'Geschäftsführer Finanzen',
        name: 'Rudi Heiser',
        imgSrc: '/assets/IMG_2976-e1537470280249.jpg',
        url: 'https://mosella-schweich.de/vereinsportrait/vorstand/rudi-heiser/',
        tasks: [
          'Ansprechpartner Buchhaltung',
          'Mitgliederwesen',
          'Budgetierung Abteilungsbudget',
          'Ansprechpartner Mertes Gbr',
          'Lohnbuchhaltung',
          'Ansprechpartner Banken'
        ]
      }, {
        title: 'Geschäftsführer Sport',
        name: 'Egbert Konder',
        imgSrc: '/assets/IMG_2978-e1537470320138.jpg',
        url: 'https://mosella-schweich.de/vereinsportrait/vorstand/egbert_konder/',
        tasks: [
          'Ansprechpartner der Abteilungen',
          'Sportstättenmanagement',
          'Verwaltung der Turnhalle am Winzerkeller',
          'Vergabe bzw. Ansprechpartner Hallenzeiten',
          'Dokumentierung und Vergabe von Schlüsseln',
          'Ansprechpartner "Haus des Sports"'
        ]
      }, {
        title: 'Geschäftsführer Verwaltung',
        name: 'Josef Rohr',
        imgSrc: '/assets/IMG_2977-e1537470381752.jpg',
        url: 'https://mosella-schweich.de/vereinsportrait/vorstand/josef-rohr/',
        tasks: [
          'Behördenkontakt',
          'Abschluss und Verwaltung von Versicherungen',
          'Sport-Schadensmeldungen',
          'Gebäudewart',
          'Ansprechpartner Seniorengruppe',
          'Eventmanager'
        ]
      }
    ]
  }

  vorsitzende() {
    return this.slides.slice(0, 2);
  }
  geschaeftsfuehrer() {
    return this.slides.slice(2, 5);
  }

  ngOnInit() {
  }

  getCols(): number {
    return Math.floor(this.platform.width() / 200);
  }

}
