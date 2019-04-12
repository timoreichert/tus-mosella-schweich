import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  items: any;
  page = 1;
  route: string;

  constructor(
    private newsService: NewsService,
    configService: ConfigService
  ) {
    this.route = configService.url + 'wp-json/wp/v2/posts';
  }

  ngOnInit() {
    this.page = 0;
    this.items = [];
    this.loadMore(null);
  }

  doRefresh(refresh: any) {
    this.ngOnInit();
    setTimeout(() => refresh.complete(), 500);
  }

  loadMore(infiniteScroll: any) {
    this.page++;
    this.newsService.load(this.route, this.page).then(items => {
      const length = items['length'];
      if (length === 0) {
        if (infiniteScroll && infiniteScroll.target) {
          infiniteScroll.target.complete();
        }
        return;
      }
      for (let i = 0; i < length; ++i) {
        this.items.push(items[i]);
      }
      if (infiniteScroll && infiniteScroll.target) {
        infiniteScroll.target.complete();
      }
    }).catch(e => {
      if (infiniteScroll && infiniteScroll.target) {
        infiniteScroll.target.complete();
      }
      console.warn(e);
    });
  }

}
