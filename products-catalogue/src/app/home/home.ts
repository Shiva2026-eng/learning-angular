import { Component, inject, OnInit, signal } from '@angular/core';
import { Productservice } from '../services/productservice';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private product_service = inject(Productservice);
  products = signal<any[]>([]);
  ngOnInit(): void {
    this.product_service.getUsers().subscribe((response: any) => {
      this.products.set(response.products);
      console.log(this.products());
    });
  }
}
