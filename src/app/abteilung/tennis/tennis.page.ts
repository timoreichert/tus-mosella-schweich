import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-tennis',
  templateUrl: '../abteilung.template.html',
  styleUrls: ['../abteilung.template.scss']
})
export class TennisPage extends AbteilungTemplate  {
  url = '/departments/tennis';
  constructor(protected db: AngularFirestore) {
    super(db);
  }
}
