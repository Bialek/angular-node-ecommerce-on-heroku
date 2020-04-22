import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';

import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import {
  NzButtonModule,
  NzLayoutModule,
  NzIconModule,
  NzMenuModule,
  NzSwitchModule,
  NzGridModule,
  NzCardModule,
} from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

const appRouters: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    redirectTo: '/home',
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
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    HomeComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouters),
    HttpClientModule,
    NzButtonModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzSwitchModule,
    NzGridModule,
    NzCardModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
