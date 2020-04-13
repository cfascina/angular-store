import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart/cart.service';
import { ProductService } from '../../services/products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetails implements OnInit {
  product: any;

  constructor(
    private CartService: CartService,
    private route: ActivatedRoute) { }

  addToCart(product) {
    this.CartService.addToCart(product);

    alert('Product added to cart.');
  }

  ngOnInit() {    
    this.route.paramMap.subscribe(params => {
      this.product = ProductService[+params.get('productId')]
    })    
  }
}
