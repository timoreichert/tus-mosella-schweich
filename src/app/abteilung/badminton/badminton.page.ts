import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Department } from '../abteilung.interface';



@Component({
  selector: 'app-badminton',
  templateUrl: './badminton.page.html',
  styleUrls: ['./badminton.page.scss'],
})
export class BadmintonPage {

  private departmentDoc: AngularFirestoreDocument<Department>;
  department$: Observable<Department>;

  constructor(private db: AngularFirestore) {
    this.departmentDoc = this.db.doc<Department>('/departments/badminton');
    this.department$ = this.departmentDoc.valueChanges();
  }
}
