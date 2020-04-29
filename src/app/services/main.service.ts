import { Injectable } from '@angular/core';
import { RequestParams } from 'src/app/types';
import { Product, PayForm } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor() {}

  @Injectable({
    providedIn: 'root',
  })
  productsRequest: RequestParams = {
    action: 'getProducts',
    name: '',
    category: '',
  };
  products;

  cart: Product[] = [];

  private apiPath = 'https://jakubadamus.cba.pl/xhr.php?';

  getProducts(productsRequest) {
    const s = new Promise((resolve, reject) => {
      const xhttp = new XMLHttpRequest();
      const SQL =
        'object=' + encodeURIComponent(JSON.stringify(productsRequest));
      console.log(this.apiPath + SQL);
      xhttp.open('GET', this.apiPath + SQL, true);
      xhttp.send();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          const resultObject = JSON.parse(xhttp.responseText);

          if (resultObject !== null) {
            resolve(resultObject);
          } else {
            reject('Failed');
          }
        }
      };
    });
    s.then((onmessage: any) => {
      this.products = onmessage;
      console.log(this.products);
    }).catch((onmessage) => {
      console.log(
        'Coś poszło nie tak podczas wczytywania produktów!',
        onmessage
      );
    });
  }

  paypal(formData: PayForm) {
    window.open(
      `https://www.jakubadamus.cba.pl/paypal.php?firstName=${formData.name}&lastName=${formData.name}&email=${formData.email}&phone=${formData.phoneNumber}&products%5B%5D=%7B%0D%0A++%22product%22%3A+%7B%0D%0A++++%22id%22%3A+%223%22%2C%0D%0A++++%22title%22%3A+%22Arma+3%22%2C%0D%0A++++%22thumbnail%22%3A+%22https%3A%2F%2Fvignette.wikia.nocookie.net%2Farmedassault%2Fimages%2F1%2F13%2FArma-3-cover.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F340%3Fcb%3D20140704174436%22%2C%0D%0A++++%22category%22%3A+%22game%22%2C%0D%0A++++%22price%22%3A+%2213%22%0D%0A++%7D%0D%0A%7D&products%5B%5D=%7B%0D%0A++%22product%22%3A+%7B%0D%0A++++%22id%22%3A+%2223%22%2C%0D%0A++++%22title%22%3A+%22Microsoft+Windows+95%22%2C%0D%0A++++%22thumbnail%22%3A+%22https%3A%2F%2Fwww.mobygames.com%2Fimages%2Fcovers%2Fl%2F241832-microsoft-windows-95-included-games-windows-front-cover.jpg%22%2C%0D%0A++++%22category%22%3A+%22tool%22%2C%0D%0A++++%22price%22%3A+%22260%22%0D%0A++%7D%0D%0A%7D&products%5B%5D=%7B%0D%0A++%22product%22%3A+%7B%0D%0A++++%22id%22%3A+%2249%22%2C%0D%0A++++%22title%22%3A+%22Total+Overdose%22%2C%0D%0A++++%22thumbnail%22%3A+%22https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Ff%2Ffb%2FTotal_Overdose_Coverart.png%2F220px-Total_Overdose_Coverart.png%22%2C%0D%0A++++%22category%22%3A+%22game%22%2C%0D%0A++++%22price%22%3A+%225%22%0D%0A++%7D%0D%0A%7D&aggrement=on`
    );
  }
}
