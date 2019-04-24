import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-turnen',
  templateUrl: '../abteilung.template.html',
  styleUrls: ['../abteilung.template.scss']
})
export class TurnenPage extends AbteilungTemplate  {
  url = '/departments/turnen';
  constructor(protected db: AngularFirestore) {
    super(db);
  }
}
