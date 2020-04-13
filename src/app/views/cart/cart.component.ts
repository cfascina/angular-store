import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from './../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  formCheckOut;

  constructor(
    private CartService: CartService,
    private FormBuilder: FormBuilder) {
      this.formCheckOut = this.FormBuilder.group({
        name: '',
        address: ''
      });
    }

  ngOnInit() {
    this.items = this.CartService.getItems();
  }

  onSubmit(userData) {
    this.items = this.CartService.clearCart();
    this.formCheckOut.reset();

    console.warn('Your order was submitted.', userData);
    
  }
}
