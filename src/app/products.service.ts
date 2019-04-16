import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url: string;
  constructor(private httpClient: HttpClient) {
    this.url = environment.wordpress.origin + 'wp-json/wc/v2/products';
  }

  load(page: number = 1): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url, {
      params: {
        page: `${page}`,
        consumer_key: environment.wordpress.woocommerce.consumer_key,
        consumer_secret: environment.wordpress.woocommerce.consumer_secret
      }
    });
  }
}
