import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Department } from './abteilung.interface';


@Component({
  selector: 'app-abteilung-template',
  templateUrl: './abteilung.template.html',
  styleUrls: ['./abteilung.template.scss']
})
export class AbteilungTemplate implements OnInit {

  protected _url: string;
  private departmentDoc: AngularFirestoreDocument<Department>;
  public department$: Observable<Department>;

  constructor(protected db: AngularFirestore) { }

  ngOnInit() {
    console.log('url', this.url);
    this.departmentDoc = this.db.doc<Department>(this.url);
    this.department$ = this.departmentDoc.valueChanges();
  }

  protected get url(): string{
    return this._url;
  };

  protected set url(url: string) {
    this._url = url;
  }

}
