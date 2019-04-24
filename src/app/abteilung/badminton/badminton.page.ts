import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-badminton',
  templateUrl: '../abteilung.template.html',
  styleUrls: ['../abteilung.template.scss']
})
export class BadmintonPage extends AbteilungTemplate  {
  url = '/departments/badminton';
  constructor(protected db: AngularFirestore) {
    super(db);
  }
}
