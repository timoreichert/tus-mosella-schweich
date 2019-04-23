import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-fussball',
  templateUrl: '../abteilung.template.html'
})
export class FussballPage extends AbteilungTemplate  {
  constructor(db: AngularFirestore) {
    super(db, '/departments/fussball');
  }
}
