import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Product } from 'src/app/types';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productsCollection: Product[] = this.mainService.products;
  searchChangeObserver;

  constructor(public mainService: MainService) {}

  ngOnInit(): void {}

  onSearchChange(searchValue: string) {
    if (!this.searchChangeObserver) {
      Observable.create((observer) => {
        this.searchChangeObserver = observer;
      })
        .pipe(debounceTime(300))
        .pipe(distinctUntilChanged())
        .subscribe((value) => {
          if (value === '') {
            this.productsCollection = this.mainService.products;
          } else {
            this.productsCollection = this.mainService.products.filter(
              (product: Product) =>
                product.title.toLowerCase().indexOf(value.toLowerCase()) !==
                  -1 ||
                product.price.indexOf(value) !== -1 ||
                product.category.toLowerCase().indexOf(value.toLowerCase()) !==
                  -1
            );
          }
        });
    }

    this.searchChangeObserver.next(searchValue);
  }
}
