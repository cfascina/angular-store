import { Component, OnInit } from '@angular/core';

import { CartService } from './../../services/cart/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingTax: any;

  constructor(private CartService: CartService) { }

  ngOnInit() {
    this.shippingTax = this.CartService.getShippingTax();
  }

}
