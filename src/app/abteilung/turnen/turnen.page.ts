import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-turnen',
  templateUrl: '../abteilung.template.html'
})
export class TurnenPage extends AbteilungTemplate  {
  constructor(db: AngularFirestore) {
    super(db, '/departments/turnen');
  }
}
