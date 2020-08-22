import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  NzTableModule,
  NzPopconfirmModule,
  NzInputNumberModule,
  NzFormModule,
  NzInputModule,
  NzSelectModule,
  NzCheckboxModule,
  NzModalModule,
  NzSpinModule,
  NzCarouselModule,
} from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { PageLayoutComponent } from './layout/page/layout.component';
import { AdminLayoutComponent } from './layout/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AdminDashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AdminProductsComponent } from './components/admin/products/products.component';

registerLocaleData(en);

const appRouters: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  { path: 'payment', component: PaymentComponent },
  {
    path: 'products',
    component: ProductsComponent,
  },
  { path: 'product/:id', component: ProductComponent, pathMatch: 'full' },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin/products', component: AdminProductsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    HomeComponent,
    PageLayoutComponent,
    CartComponent,
    PaymentComponent,
    AdminDashboardComponent,
    AdminProductsComponent,
    AdminLayoutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouters),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzSwitchModule,
    NzGridModule,
    NzCardModule,
    NzTableModule,
    NzPopconfirmModule,
    NzInputNumberModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzCheckboxModule,
    NzModalModule,
    NzSpinModule,
    NzCarouselModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
