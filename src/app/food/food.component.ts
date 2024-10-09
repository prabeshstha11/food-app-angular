import { Component, Input } from '@angular/core';
import { FoodItem } from '../food-item';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss',
})
export class FoodComponent {
  @Input() foodItem!: FoodItem;
}
