import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbteilungTemplate } from '../abteilung.template';

@Component({
  selector: 'app-gesundheitssport',
  templateUrl: '../abteilung.template.html',
  styleUrls: ['../abteilung.template.scss']
})
export class GesundheitssportPage extends AbteilungTemplate  {
  url = '/departments/gesundheitssport';
  constructor(protected db: AngularFirestore) {
    super(db);
  }
}
