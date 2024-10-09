import { Component, inject, OnInit } from '@angular/core';
import { FoodComponent } from '../food/food.component';
import { FoodService } from '../food.service';
import { FoodItem } from '../food-item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FoodComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  foodService: FoodService = inject(FoodService);
  cartService: CartService = inject(CartService);
  foodItemList: FoodItem[] = [];
  filteredFoodItemList: FoodItem[] = [];
  searchQuery: string = '';

  constructor() {
    this.foodService.getAllFoodItems().then((foodItemList: FoodItem[]) => {
      this.foodItemList = foodItemList;
      this.filteredFoodItemList = foodItemList;
    });
  }

  totalItems: number = 0;

  updateTotalItems() {
    this.totalItems = this.cartService.getTotalItems();
  }

  searchFood() {
    if (this.searchQuery) {
      this.filteredFoodItemList = this.foodItemList.filter((item) =>
        item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredFoodItemList = this.foodItemList;
    }
  }
}
