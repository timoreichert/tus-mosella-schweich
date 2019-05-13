import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.getRawICalendar().pipe(
      map(rawICal => this.convert(rawICal)['VCALENDAR'])
    );
  }

  getRawICalendar() {
    return this.http.get(`${environment.google_calendar_origin}/calendar/ical/tusmosella%40gmail.com/public/basic.ics`, { responseType: 'text' })
    .pipe(
      catchError(error => of(error))
    );
  }

  private convert(source: string) {
    let key = '';
    let value = '';
    let output = {};
    let parent = {};
    let lines = source.split(/\r\n|\n|\r/);
    let splitAt: number;

    let currentObj = output;
    let parents = [];

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      if (line.charAt(0) === ' ') {
        currentObj[key] += line.substr(1);

      } else {
        splitAt = line.indexOf(':');

        if (splitAt < 0) {
          continue;
        }

        key = line.substr(0, splitAt);
        value = line.substr(splitAt + 1);

        switch (key) {
          case 'BEGIN':
            parents.push(parent);
            parent = currentObj;
            if (parent[value] == null) {
              parent[value] = [];
            }
            currentObj = {};
            parent[value].push(currentObj);
            break;
          case 'END':
            currentObj = parent;
            parent = parents.pop();
            break;
          default:
            if (currentObj[key]) {
              if (!Array.isArray(currentObj[key])) {
                currentObj[key] = [currentObj[key]];
              }
              currentObj[key].push(value);
            } else {
              currentObj[key] = value;
            }
        }
      }
    }
    return output;
  };
}
