import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  galleryImages = [
    {
      title: 'Lorem ipsum',
      description:
        'nteger gravida eros velit, sed congue urna mattis et. In eu ligula volutpat, consectetur risus in, sollicitudin velit. Praesent faucibus diam sit amet lorem gravida congue.',
      buttonText: 'Shop now!',
      routeTo: '/products',
      img: 'assets/home_gallery_1.jpg',
    },
    {
      title: 'Cras a quam',
      description:
        'nteger gravida eros velit, sed congue urna mattis et. In eu ligula volutpat, consectetur risus in, sollicitudin velit. Praesent faucibus diam sit amet lorem gravida congue.',
      buttonText: 'Shop now!',
      routeTo: '/products',
      img: 'assets/home_gallery_2.jpg',
    },
    {
      title: 'In tortor mi',
      description:
        'nteger gravida eros velit, sed congue urna mattis et. In eu ligula volutpat, consectetur risus in, sollicitudin velit. Praesent faucibus diam sit amet lorem gravida congue.',
      buttonText: 'Shop now!',
      routeTo: '/products',
      img: 'assets/home_gallery_3.jpg',
    },
  ];

  constructor(public mainService: MainService) {}

  ngOnInit(): void {}
}
