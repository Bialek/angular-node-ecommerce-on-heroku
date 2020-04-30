import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isAdmin: boolean = false;
  isHome: boolean = false;
  title = 'Goat game';
  constructor(public mainService: MainService, private router: Router) {}

  ngOnInit(): void {
    this.mainService.getProducts(this.mainService.productsRequest);

    this.router.events.subscribe((url: any) => {
      if (url.url) {
        if (url.url.split('/')[1] === 'admin') {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
        if (url.url === '/home') {
          this.isHome = true;
        } else {
          this.isHome = false;
        }
      }
    });
  }

  isAppReady = (): boolean =>
    !!(
      !this.mainService.isProductsLoading &&
      this.mainService.products?.productsTable
    );
}
