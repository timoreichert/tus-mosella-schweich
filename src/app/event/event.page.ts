import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { EventService } from './event.service';

export interface Event {

}

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  store: Array<any>;
  events: Object[];

  constructor(private eventService: EventService) {
    this.events = [];
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(ical => {
      this.store = ical[0]['VEVENT']
        .filter(e => e.DTSTART)
        .sort((a, b) => {
          let aYear = a.DTSTART.substr(0, 4);
          let bYear = b.DTSTART.substr(0, 4);
          if (aYear === bYear) {
            let aMonth = a.DTSTART.substr(4, 2);
            let bMonth = b.DTSTART.substr(4, 2);
            if (aMonth === bMonth) {
              let aDay = a.DTSTART.substr(6, 2);
              let bDay = b.DTSTART.substr(6, 2);
              if (aDay === bDay) {
                let aHour = a.DTSTART.substr(9, 2);
                let bHour = b.DTSTART.substr(9, 2);
                return bHour - aHour;
              } else {
                return bDay - aDay;
              }
            } else {
              return bMonth - aMonth;
            }
          } else {
            return bYear - aYear;
          }
        });
      this.events = [];
      this.loadMore();
    });
  }

  doRefresh(refresh: any) {
    this.loadMore();
    setTimeout(() => refresh.target.complete(), 750);
  }

  loadMore(infiniteScroll?: any) {
    this.events.push(...this.store.slice(this.events.length, this.events.length + 10));
    if (infiniteScroll && infiniteScroll.target) {
      infiniteScroll.target.complete();
    }
  }

  trackById(index: number, item: any) {
    return item ? item.UID : null;
  }
}
