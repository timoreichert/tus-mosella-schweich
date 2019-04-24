import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-leichtathletik',
  templateUrl: '../abteilung.template.html',
  styleUrls: ['../abteilung.template.scss']
})
export class LeichtathletikPage extends AbteilungTemplate  {
  url = '/departments/leichtathletik';
  constructor(protected db: AngularFirestore) {
    super(db);
  }
}
