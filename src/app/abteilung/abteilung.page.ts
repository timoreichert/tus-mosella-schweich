import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-abteilung',
  templateUrl: './abteilung.page.html',
  styleUrls: ['./abteilung.page.scss'],
})
export class AbteilungPage {

  departments: Observable<any[]>;
  slides: Array<any>;
  slideOpts = {
    effect: 'slide',
    slidesPerView: 1.4
  };
  constructor(
    private platform: Platform,
    db: AngularFirestore
  ) {
    this.departments = db.collection('departments').valueChanges();
  }

  getCols(): number {
    return Math.floor(this.platform.width() / 240);
  }
}