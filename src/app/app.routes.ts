import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'foodapp.' },
  { path: 'cart', component: CartComponent, title: 'my cart.' },
];
