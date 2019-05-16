import { Component, OnInit } from '@angular/core';
import { map, } from 'rxjs/operators';

import { MediaService } from '../media.service';
import { NewsService } from '../news.service';
import { News } from '../news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  items: News[];
  page = 1;

  constructor(
    private newsService: NewsService,
    private mediaService: MediaService
  ) { }

  ngOnInit() {
    this.page = 1;
    this.items = [];
    this.loadMore();
  }

  doRefresh(refresh: any) {
    this.ngOnInit();
    setTimeout(() => refresh.target.complete(), 750);
  }

  loadMore(infiniteScroll?: any) {
    this.newsService.load(this.page++).pipe(
        map(news => {
          return news.map(n => {
            const { id, excerpt, date, title, featured_media } = n;
            return {
              id, excerpt, date, title,
              featured_media_source_url$: featured_media === 0 ? null :
                this.mediaService.getMediaUrl(featured_media).pipe(
                  map(m => m.source_url)
                )
            } as News;
          });
        })
      ).subscribe(
        news => this.items.push(...news),
        err => console.warn(err),
        () => {
          if (infiniteScroll && infiniteScroll.target) {
            infiniteScroll.target.complete();
          }
        });
  }

  trackById(index: number, item: News) {
    return item ? item.id : null;
  }
}
