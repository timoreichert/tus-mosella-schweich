import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Department } from './abteilung.interface';


@Component({
  selector: 'app-abteilung-template',
  templateUrl: './abteilung.template.html',
  styles: [`.description{
      font-size: small;
      text-align: left;
    }`],
})
export class AbteilungTemplate {

  private departmentDoc: AngularFirestoreDocument<Department>;
  department$: Observable<Department>;

  constructor(db: AngularFirestore, url: string) {
    this.departmentDoc = db.doc<Department>(url);
    this.department$ = this.departmentDoc.valueChanges();
  }

}
