import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Categories } from './categories/categories';
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
];
