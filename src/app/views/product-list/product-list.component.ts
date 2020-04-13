import { Component } from '@angular/core';

import { ProductService } from '../../services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductList {
  products = ProductService;
}
