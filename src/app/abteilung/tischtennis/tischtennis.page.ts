import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-tischtennis',
  templateUrl: '../abteilung.template.html'
})
export class TischtennisPage extends AbteilungTemplate  {
  constructor(db: AngularFirestore) {
    super(db, '/departments/tischtennis');
  }
}
