import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-header',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  productsForm = new FormGroup({
    product_name: new FormControl('', [Validators.required]),
  });
  searchProducts() {
    console.log(this.productsForm.value);
    this.productsForm.reset();
  }
}
