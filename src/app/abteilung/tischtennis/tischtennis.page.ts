import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-tischtennis',
  templateUrl: '../abteilung.template.html',
  styleUrls: ['../abteilung.template.scss']
})
export class TischtennisPage extends AbteilungTemplate  {
  url = '/departments/tischtennis';
  constructor(protected db: AngularFirestore) {
    super(db);
  }
}
