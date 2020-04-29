import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Product } from 'src/app/types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(public mainService: MainService) {}

  ngOnInit(): void {}

  deleteProduct(id: string): void {
    this.mainService.cart = this.mainService.cart.filter(
      (item: Product) => item.id !== id
    );
  }

  totalCost() {
    return this.mainService.cart.reduce(
      (a: number, b: Product) => a + (+b.price * b.count || 0),
      0
    );
  }
}
