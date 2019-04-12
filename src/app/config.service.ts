import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _url = 'https://mosella-schweich.de/';

  constructor() { }

  get url(): string {
    return this._url;
  }
}
