import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fanshop',
  templateUrl: './fanshop.page.html',
  styleUrls: ['./fanshop.page.scss'],
})
export class FanshopPage implements OnInit {
  items: Product[];
  page = 1;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.page = 1;
    this.items = [];
    this.loadMore();
  }

  doRefresh(refresh: any) {
    this.loadMore();
    setTimeout(() => refresh.target.complete(), 750);
  }

  loadMore(infiniteScroll?: any) {
    this.productsService.load(this.page++)
      .pipe(
        map(products => {
          return products.map(p => {
            const { id, name, images, permalink, short_description } = p;
            return {
              id, name, images, permalink, short_description
            } as Product;
          });
        })
      ).subscribe(
        products => this.items.push(...products),
        err => console.warn(err),
        () => {
          if (infiniteScroll && infiniteScroll.target) {
            infiniteScroll.target.complete();
          }
        });
  }

  trackById(index: number, item: any) {
    return item ? item.id : null;
  }
}
