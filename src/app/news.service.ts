import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './news.model';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = environment.wordpress.origin + 'wp-json/wp/v2/posts';
  }

  load(page: number = 1): Observable<News[]> {
    return this.http.get<News[]>(this.url + `?page=${page}`);
  }
}
