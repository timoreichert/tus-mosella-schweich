import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-badminton',
  templateUrl: '../abteilung.template.html'
})
export class BadmintonPage extends AbteilungTemplate  {
  constructor(db: AngularFirestore) {
    super(db, '/departments/badminton');
  }
}
