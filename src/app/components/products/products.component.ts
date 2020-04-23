import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Product } from 'src/app/types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(public mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.getProducts(this.mainService.productsRequest);
  }

  addToCard(product: Product) {
    const productIsInCart = this.mainService.cart.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productIsInCart) {
      productIsInCart.count += 1;
      this.mainService.cart = [...this.mainService.cart];
    } else {
      this.mainService.cart.push({ ...product, count: 1 });
    }
  }
}
