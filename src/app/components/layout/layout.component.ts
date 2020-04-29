import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isAdmin: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((url: any) => {
      if (url.url && url.url.split('/')[1] === 'admin') {
        this.isAdmin = true;
      } else if (url.url) {
        this.isAdmin = false;
      }
    });
  }
}
