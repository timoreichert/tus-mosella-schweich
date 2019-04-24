import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-basketball',
  templateUrl: '../abteilung.template.html',
  styleUrls: ['../abteilung.template.scss']
})
export class BasketballPage extends AbteilungTemplate  {
  url = '/departments/basketball';
  constructor(protected db: AngularFirestore) {
    super(db);
  }
}
