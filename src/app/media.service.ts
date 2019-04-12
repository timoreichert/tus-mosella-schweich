import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(
    private configService: ConfigService,
    private http: HttpClient
  ) { }

  getMediaUrl(mediaId: string) {

    return new Promise((resolve, reject) => {
      const url = this.configService.url + 'wp-json/wp/v2/media/' + mediaId;
      this.http.get(url)
        .subscribe(data => {
          console.dir(data);
          resolve('test');
        }, error => {
          reject(error);
        });
    });
  }
}
