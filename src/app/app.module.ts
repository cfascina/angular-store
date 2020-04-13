import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CartComponent } from './views/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductDetails } from './views/product-details/product-details.component';
import { ProductList } from './views/product-list/product-list.component';
import { ShippingComponent } from './views/shipping/shipping.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductList },
      { path: 'cart', component: CartComponent },
      { path: 'products/:productId', component: ProductDetails },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    ProductDetails,
    ProductList,
    ShippingComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
