import { Component, inject, OnInit, signal } from '@angular/core';
import { Productservice } from '../services/productservice';
import { CategoryCard } from '../components/category-card/category-card';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categories',
  imports: [CategoryCard],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories implements OnInit {
  product_service = inject(Productservice);
  private router = inject(Router);
  categories = signal<any[]>([]);
  ngOnInit(): void {
    this.product_service.loading.set(true);
    this.product_service.getCategories().subscribe({
      next: (response: any) => {
        this.categories.set(response);
        this.product_service.loading.set(false);
      },
      error: () => {
        this.product_service.error.set('Something went wrong in fetching the categories');
        this.product_service.loading.set(false);
      },
    });
  }
  printCategory(name: string) {
    this.product_service.setProductCategory(name);
    this.router.navigate([`/products/${name}`]);
    console.log(name);
  }
}
