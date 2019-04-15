import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './news.model';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url: string;
  constructor(
    public http: HttpClient,
    configService: ConfigService
  ) {
    this.url = configService.url + 'wp-json/wp/v2/posts';
  }

  load(page: number = 1): Observable<News[]> {
    const concat = (this.url.indexOf('?') > 0) ? '&' : '?';
    return this.http.get<News[]>(this.url + concat + 'page=' + page);
  }
}
