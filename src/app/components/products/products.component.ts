import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { ProductsResponse } from 'src/app/types';

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
}
