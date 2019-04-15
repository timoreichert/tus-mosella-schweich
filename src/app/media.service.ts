import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { Media } from './media.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(
    private configService: ConfigService,
    private http: HttpClient
  ) { }

  getMediaUrl(mediaId: number): Observable<Media> {
    const url = this.configService.url + 'wp-json/wp/v2/media/' + mediaId;
    return this.http.get<Media>(url);
  }
}
