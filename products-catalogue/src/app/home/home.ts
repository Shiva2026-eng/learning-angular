import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Productservice } from '../services/productservice';
import { ProductCard } from '../components/product-card/product-card';
@Component({
  selector: 'app-home',
  imports: [ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  product_service = inject(Productservice);
  // products = this.product_service.products();
  ngOnInit(): void {
    this.product_service.loadProducts();
  }
}
