import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];

  constructor() {
    this.cart = [];
  }

  addToCart(foodItem: CartItem) {
    const existingItem = this.cart.find(
      (item: CartItem) => item.title === foodItem.title
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...foodItem, quantity: 1 });
    }
  }

  getTotalItems(): number {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  getCartItems(): CartItem[] {
    return this.cart;
  }
}
