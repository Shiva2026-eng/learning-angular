import { inject, Service, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Service()
export class Productservice {
  private http = inject(HttpClient);
  baseURL: string = 'https://dummyjson.com/products';
  getUsers() {
    return this.http.get(`${this.baseURL}`);
  }
  product_to_search = signal('');
  searchProduct(product: string) {
    this.product_to_search.set(product);
    return this.http.get(`${this.baseURL}/search?q=${this.product_to_search}`);
  }
}
