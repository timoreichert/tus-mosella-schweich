import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-fussball',
  templateUrl: '../abteilung.template.html',
  styleUrls: ['../abteilung.template.scss']
})
export class FussballPage extends AbteilungTemplate  {
  url = '/departments/fussball';
  constructor(protected db: AngularFirestore) {
    super(db);
  }
}
