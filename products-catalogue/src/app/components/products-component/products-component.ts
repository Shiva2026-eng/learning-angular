import { Component, inject, OnInit, signal } from '@angular/core';
import { Productservice } from '../../services/productservice';
import { ProductCard } from '../product-card/product-card';
@Component({
  selector: 'app-products-component',
  imports: [ProductCard],
  templateUrl: './products-component.html',
  styleUrl: './products-component.scss',
})
export class ProductsComponent implements OnInit {
  product_service = inject(Productservice);
  products = signal<any[]>([]);
  ngOnInit(): void {
    this.product_service.getProductsByCategory().subscribe((response: any) => {
      this.products.set(response.products);
      console.log(this.products());
    });
  }
}
