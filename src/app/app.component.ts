import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Goat game';
  constructor(public mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.getProducts(this.mainService.productsRequest);
  }
}
