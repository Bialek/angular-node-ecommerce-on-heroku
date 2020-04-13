import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';

const appRouters: Routes = [
  { path: 'landing', component: LandingComponent },
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  { path: 'product/:id', component: ProductComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProductsComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRouters), ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
