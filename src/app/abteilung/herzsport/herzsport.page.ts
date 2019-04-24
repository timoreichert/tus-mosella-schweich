import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-herzsport',
  templateUrl: '../abteilung.template.html',
  styleUrls: ['../abteilung.template.scss']
})
export class HerzsportPage extends AbteilungTemplate  {
  url = '/departments/herzsport';
  constructor(protected db: AngularFirestore) {
    super(db);
  }
}
