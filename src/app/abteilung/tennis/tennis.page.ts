import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-tennis',
  templateUrl: '../abteilung.template.html'
})
export class TennisPage extends AbteilungTemplate  {
  constructor(db: AngularFirestore) {
    super(db, '/departments/tennis');
  }
}
