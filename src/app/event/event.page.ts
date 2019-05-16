import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { EventService } from './event.service';

export interface Event {

}

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  nextPageToken = null;
  events: Object[];

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.nextPageToken = null;
    this.events = [];
    this.loadMore();
  }


  doRefresh(refresh: any) {
    this.ngOnInit();
    setTimeout(() => refresh.target.complete(), 750);
  }

  loadMore(infiniteScroll?: any) {

    this.eventService.getEvents(this.nextPageToken)
      .subscribe(
        data => {
          this.nextPageToken = data.nextPageToken;
          if (this.nextPageToken === undefined) {
            infiniteScroll.target.disabled = true;
          }
          this.events.push(...data.items);
        }, err => console.warn(err),
        () => {
          if (infiniteScroll && infiniteScroll.target) {
            infiniteScroll.target.complete();
          }
        });
  }

  trackById(index: number, item: any) {
    return item ? item.id : null;
  }
}
