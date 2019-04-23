import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-herzsport',
  templateUrl: '../abteilung.template.html'
})
export class HerzsportPage extends AbteilungTemplate  {
  constructor(db: AngularFirestore) {
    super(db, '/departments/herzsport');
  }
}
