import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Media } from './media.model';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  getMediaUrl(mediaId: number): Observable<Media> {
    const url = environment.wordpress.origin + 'wp-json/wp/v2/media/' + mediaId;
    return this.http.get<Media>(url);
  }
}
