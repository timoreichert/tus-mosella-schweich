import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-basketball',
  templateUrl: '../abteilung.template.html'
})
export class BasketballPage extends AbteilungTemplate  {
  constructor(db: AngularFirestore) {
    super(db, '/departments/basketball');
  }
}
