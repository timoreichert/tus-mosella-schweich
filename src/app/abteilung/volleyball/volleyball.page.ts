import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-volleyball',
  templateUrl: '../abteilung.template.html'
})
export class VolleyballPage extends AbteilungTemplate  {
  constructor(db: AngularFirestore) {
    super(db, '/departments/volleyball');
  }
}
