import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Department } from '../abteilung.interface';


@Component({
  selector: 'app-fussball',
  template: `<ng-container *ngIf="department$|async as department">
              <ion-header>
                <ion-toolbar>
                  <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                  </ion-buttons>
                  <ion-title>{{department.title}}</ion-title>
                </ion-toolbar>
              </ion-header>
              <ion-content>
                <figure *ngIf="department.headerImgSrc">
                  <img [src]="department.headerImgSrc">
                </figure>
                <ion-slides pager="true">
                  <ion-slide>
                    <ion-grid>
                      <ion-row>
                        <ion-col>
                          <h2>{{department.header}}</h2>
                          <h3>{{department.subHeader}}</h3>
                          <ng-container *ngFor="let description of department.description">
                            <p class="description">{{description}}</p>
                          </ng-container>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-slide>
                  <ion-slide>
                    <ion-grid>
                      <ion-row>
                        <ion-col>
                          <h2>Kontakt</h2>
                        </ion-col>
                      </ion-row>
                      <ion-row>
                        <ion-col *ngFor="let contact of department.contact">
                          <ion-list>
                            <ion-list-header *ngIf="contact.title">
                              {{contact.title}}
                            </ion-list-header>
                            <ion-item *ngIf="contact.name">
                              <ion-avatar slot="start" *ngIf="contact.imgSrc">
                                <img [src]="contact.imgSrc">
                              </ion-avatar>
                              <ion-avatar slot="start" *ngIf="!contact.imgSrc">
                                <img src="/assets/avatar.svg">
                              </ion-avatar>
                              <ion-label>{{contact.name}}</ion-label>
                            </ion-item>
                            <ion-item *ngIf="contact.tel" [href]="'tel:' + contact.tel">
                              <ion-icon name="call" slot="start"></ion-icon>
                              <ion-label>{{contact.tel}}</ion-label>
                            </ion-item>
                            <ion-item *ngIf="contact.mail" [href]="'mailto:' + contact.mail">
                              <ion-icon name="mail" slot="start"></ion-icon>
                              <ion-label>{{contact.mail}}</ion-label>
                            </ion-item>
                          </ion-list>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-slide>
                </ion-slides>
              </ion-content>
            </ng-container>`,
  styles: [`.description{
      font-size: small;
      text-align: left;
    }`],
})
export class FussballPage  {

  private departmentDoc: AngularFirestoreDocument<Department>;
  department$: Observable<Department>;

  constructor(private db: AngularFirestore) {
    this.departmentDoc = this.db.doc<Department>('/departments/fussball');
    this.department$ = this.departmentDoc.valueChanges();
  }

}
