import { Injectable } from '@angular/core';
import { RequestParams } from 'src/app/types';
import { Product, PayForm, ProductPayload } from 'src/app/types';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  @Injectable({
    providedIn: 'root',
  })
  productsRequest: RequestParams = {
    action: 'getProducts',
    name: '',
    category: '',
  };

  products: Product[] = [];
  cart: Product[] = [];
  isProductsLoading: boolean = true;
  isProductAddLoading: boolean = false;
  isProductRemoveLoading: boolean = false;

  private _apiPathGetProducts = 'https://localhost:5000/products';
  private _apiPathAddProduct = 'https://localhost:5000/add-product';
  private _apiPathRemoveProduct = 'https://localhost:5000/remove-product';

  getProducts(): void {
    this.http
      .get<Product[]>(this._apiPathGetProducts)
      .pipe(
        finalize((): void => {
          this.isProductsLoading = false;
        })
      )
      .subscribe((products: Product[]): void => {
        this.isProductsLoading = false;
        this.products = products;
      });
  }

  addProduct(newProduct: ProductPayload, callback) {
    this.isProductAddLoading = true;
    this.http
      .post<Product>(this._apiPathAddProduct, newProduct)
      .toPromise()
      .then(() => {
        callback();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.isProductAddLoading = false;
      });
  }

  removeProduct(id: string) {
    this.isProductRemoveLoading = true;
    this.http
      .delete<string>(this._apiPathRemoveProduct, {
        params: { id: id },
      })
      .toPromise()
      .then(() => this.getProducts())
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.isProductRemoveLoading = false;
      });
  }

  addToCard(product: Product) {
    const productIsInCart = this.cart.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productIsInCart) {
      productIsInCart.count += 1;
      this.cart = [...this.cart];
    } else {
      this.cart.push({ ...product, count: 1 });
    }
  }

  paypal(formData: PayForm) {
    window.open(
      `https://www.jakubadamus.cba.pl/paypal.php?firstName=${formData.name}&lastName=${formData.name}&email=${formData.email}&phone=${formData.phoneNumber}&products%5B%5D=%7B%0D%0A++%22product%22%3A+%7B%0D%0A++++%22id%22%3A+%223%22%2C%0D%0A++++%22title%22%3A+%22Arma+3%22%2C%0D%0A++++%22thumbnail%22%3A+%22https%3A%2F%2Fvignette.wikia.nocookie.net%2Farmedassault%2Fimages%2F1%2F13%2FArma-3-cover.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F340%3Fcb%3D20140704174436%22%2C%0D%0A++++%22category%22%3A+%22game%22%2C%0D%0A++++%22price%22%3A+%2213%22%0D%0A++%7D%0D%0A%7D&products%5B%5D=%7B%0D%0A++%22product%22%3A+%7B%0D%0A++++%22id%22%3A+%2223%22%2C%0D%0A++++%22title%22%3A+%22Microsoft+Windows+95%22%2C%0D%0A++++%22thumbnail%22%3A+%22https%3A%2F%2Fwww.mobygames.com%2Fimages%2Fcovers%2Fl%2F241832-microsoft-windows-95-included-games-windows-front-cover.jpg%22%2C%0D%0A++++%22category%22%3A+%22tool%22%2C%0D%0A++++%22price%22%3A+%22260%22%0D%0A++%7D%0D%0A%7D&products%5B%5D=%7B%0D%0A++%22product%22%3A+%7B%0D%0A++++%22id%22%3A+%2249%22%2C%0D%0A++++%22title%22%3A+%22Total+Overdose%22%2C%0D%0A++++%22thumbnail%22%3A+%22https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Ff%2Ffb%2FTotal_Overdose_Coverart.png%2F220px-Total_Overdose_Coverart.png%22%2C%0D%0A++++%22category%22%3A+%22game%22%2C%0D%0A++++%22price%22%3A+%225%22%0D%0A++%7D%0D%0A%7D&aggrement=on`
    );
  }
}
