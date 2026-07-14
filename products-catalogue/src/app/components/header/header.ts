import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Productservice } from '../../services/productservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private router = inject(Router);
  private product_service = inject(Productservice);
  productsForm = new FormGroup({
    product_name: new FormControl('', [Validators.required]),
  });
  searchProducts() {
    const value = this.productsForm.value.product_name || '';
    this.product_service.searchProduct(value);
    this.router.navigate(['/']);
  }
}
