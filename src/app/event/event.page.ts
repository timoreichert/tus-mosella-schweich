import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface fireDate{
  seconds: number
}
export interface Event{
  date: fireDate
}

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage {
  
  events$: Observable<Event[]>;

  constructor(db: AngularFirestore) {
    this.events$ = db.collection<Event>('events').valueChanges().pipe(
      map(events => events.sort((a,b) =>  a.date.seconds - b.date.seconds))
    );
  }

}
