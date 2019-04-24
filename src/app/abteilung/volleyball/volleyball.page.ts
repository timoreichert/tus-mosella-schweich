import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-volleyball',
  templateUrl: '../abteilung.template.html',
  styleUrls: ['../abteilung.template.scss']
})
export class VolleyballPage extends AbteilungTemplate  {
  url = '/departments/volleyball';
  constructor(protected db: AngularFirestore) {
    super(db);
  }
}
