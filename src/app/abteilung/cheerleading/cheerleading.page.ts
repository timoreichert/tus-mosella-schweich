import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-cheerleading',
  templateUrl: '../abteilung.template.html',
  styleUrls: ['../abteilung.template.scss']
})
export class CheerleadingPage extends AbteilungTemplate  {
  url = '/departments/cheerleading';
  constructor(protected db: AngularFirestore) {
    super(db);
  }
}
