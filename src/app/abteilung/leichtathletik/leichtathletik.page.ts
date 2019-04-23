import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-leichtathletik',
  templateUrl: '../abteilung.template.html'
})
export class LeichtathletikPage extends AbteilungTemplate  {
  constructor(db: AngularFirestore) {
    super(db, '/departments/leichtathletik');
  }
}
