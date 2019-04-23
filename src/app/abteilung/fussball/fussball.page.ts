import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Department } from '../abteilung.interface';
import { AbteilungTemplate } from '../abteilung.template';


@Component({
  selector: 'app-fussball',
  templateUrl: '../abteilung.template.html'
})
export class FussballPage extends AbteilungTemplate  {

  constructor(db: AngularFirestore) {
    super(db, '/departments/fussball');
  }

}
