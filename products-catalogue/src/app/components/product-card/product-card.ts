import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  imageURL = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
  price = input.required<number>();
}
