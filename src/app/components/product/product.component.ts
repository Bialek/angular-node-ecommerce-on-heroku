import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { Product } from 'src/app/types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  id: string;
  selectedProduct: Product | undefined = undefined;

  constructor(public mainService: MainService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params.id));
  }

  getProduct() {
    if (this.selectedProduct === undefined) {
      console.log('work');

      this.selectedProduct = this.mainService.products.productsTable.find(
        (product) => product.id === this.id
      );
    }
  }
}
