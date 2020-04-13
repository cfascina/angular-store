import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product) {
    this.items.push(product)
  }

  clearCart() {
    this.items = [];

    return this.items;
  }

  getItems() {
    return this.items;
  }

  getShippingTax() {
    return this.http.get('assets/json/shipping-taxes.json');
  }
}
