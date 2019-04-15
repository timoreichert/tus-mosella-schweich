import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

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
    private mediaService: MediaService,
    private nativeStorage: NativeStorage
  ) { }

  ngOnInit() {
    this.page = 1;
    this.items = [];

    this.nativeStorage.getItem('news')
      .then(
        data => this.items = data
      ).finally(() => this.loadMore());


  }

  doRefresh(refresh: any) {
    this.ngOnInit();
    setTimeout(() => refresh.target.complete(), 750);
  }

  loadMore(infiniteScroll?: any) {
    this.newsService.load(this.page++)
      .pipe(
        map(news => {
          news
            .filter(n => n.featured_media > 0)
            .map(n => {
              this.mediaService.getMediaUrl(n.featured_media).subscribe(m => {
                n.featured_media_source_url = m.source_url;
              });
              return n;
            });
          return news;
        })
      ).subscribe(
        res => {
          this.items.push(...res);
          this.nativeStorage.setItem('news', this.items);
        },
        err => console.warn(err),
        () => {
          if (infiniteScroll && infiniteScroll.target) {
            infiniteScroll.target.complete();
          }
        });

    /*
    .then(items => {
      this.items.push(...items);
      
    }).catch(e => {
      console.warn(e);
    }).finally(() => {
      if (infiniteScroll && infiniteScroll.target) {
        infiniteScroll.target.complete();
      }
    });
    */
  }
}
