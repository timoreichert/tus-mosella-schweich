import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private fns: AngularFireFunctions) { }

  getEvents(nextPageToken?: string): Observable<any> {
    const callable = this.fns.httpsCallable('events');
    return callable({ nextPageToken: nextPageToken });
  }
}
