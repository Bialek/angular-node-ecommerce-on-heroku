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
  isReady: boolean = false;
  title = 'Goat game';
  constructor(public mainService: MainService, private router: Router) {}

  ngOnInit(): void {
    this.mainService.getProducts();

    this.router.events.subscribe((url: any) => {
      if (url.urlAfterRedirects !== undefined) {
        if (url.urlAfterRedirects.split('/')[1] === 'admin') {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
        if (url.urlAfterRedirects === '/home') {
          this.isHome = true;
        } else {
          this.isHome = false;
        }
      }
      this.isReady = true;
    });
  }

  isAppReady = (): boolean =>
    Boolean(
      !this.mainService.isProductsLoading &&
        this.mainService.products &&
        this.isReady === true
    );
}
