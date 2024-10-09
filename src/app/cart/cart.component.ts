import { Component, inject } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems: CartItem[] = [];
  cartService: CartService = inject(CartService);

  constructor() {
    this.updateCartItems();
  }

  updateCartItems() {
    this.cartItems = this.cartService.getCartItems();
  }

  getTotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  increase(item: CartItem) {
    this.cartService.addToCart(item);
  }

  decrease(item: CartItem) {
    this.cartService.decrease(item);
    this.updateCartItems();
  }
}
