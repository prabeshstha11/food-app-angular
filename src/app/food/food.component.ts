import { Component, Input } from '@angular/core';
import { FoodItem } from '../food-item';

import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss',
})
export class FoodComponent {
  @Input() foodItem!: FoodItem;

  constructor(private cartService: CartService) {}

  addToCart() {
    const cartItem: CartItem = {
      title: this.foodItem.title,
      image_url: this.foodItem.image_url,
      price: this.foodItem.price,
      description: this.foodItem.description,
      quantity: 1,
    };
    console.log(cartItem);
    this.cartService.addToCart(cartItem);
  }
}
