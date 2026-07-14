import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Categories } from './categories/categories';
import { ProductsComponent } from './components/products-component/products-component';
export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'categories',
    component: Categories,
  },
  {
    path: 'products/:category',
    component: ProductsComponent,
  },
];
