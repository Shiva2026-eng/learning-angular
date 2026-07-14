import { inject, Service, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Service()
export class Productservice {
  private http = inject(HttpClient);
  baseURL: string = 'https://dummyjson.com/products';
  products = signal<any[]>([]);
  category = signal<string>('');
  loading = signal<boolean>(true);
  error = signal<string>('');
  loadProducts() {
    this.loading.set(true);
    this.http.get(`${this.baseURL}`).subscribe({
      next: (response: any) => {
        this.products.set(response.products);
        console.log(this.products());
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Something went wrong in loading the products');
        this.loading.set(false);
      },
    });
  }
  searchProduct(product: string) {
    this.loading.set(true);
    this.http.get(`${this.baseURL}/search?q=${product}`).subscribe({
      next: (response: any) => {
        this.products.set(response.products);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Something went wrong in searching the products');
        this.loading.set(false);
      },
    });
  }
  getCategories() {
    return this.http.get(`${this.baseURL}/categories`);
  }
  setProductCategory(category: string) {
    this.category.set(category);
  }
  getProductsByCategory() {
    return this.http.get(`${this.baseURL}/category/${this.category().toLowerCase()}`);
  }
}
