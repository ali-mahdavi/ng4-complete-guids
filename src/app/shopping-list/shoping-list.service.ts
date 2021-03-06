import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShopingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private  ingredients: Ingredient[] = [
    new Ingredient('Apples', 50),
    new Ingredient('Tomatoes', 20),
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
