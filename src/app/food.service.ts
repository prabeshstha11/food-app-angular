import { Injectable } from '@angular/core';
import { FoodItem } from './food-item';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  url = 'https://monkeydata.onrender.com/';

  async getAllFoodItems(): Promise<FoodItem[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  constructor() {}
}
