import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-karate',
  templateUrl: '../abteilung.template.html',
  styleUrls: ['../abteilung.template.scss']
})
export class KaratePage extends AbteilungTemplate  {
  url = '/departments/karate';
  constructor(protected db: AngularFirestore) {
    super(db);
  }
}
