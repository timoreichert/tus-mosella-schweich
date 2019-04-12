import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  data: any = null;
  constructor(
    public http: HttpClient
  ) { }

  load(url: string, page?: number) {

    // set pagination
    if (!page) {
      page = 1;
    }

    return new Promise((resolve, reject) => {
      let concat: string;
      // check if url already has a query param
      if (url.indexOf('?') > 0) {
        concat = '&';
      } else {
        concat = '?';
      }

      this.http.get(url + concat + 'page=' + page)
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        },
          error => {
            reject(error);
          });
    });
  }
}
