import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

recipeSelected = new EventEmitter<Recipe>();

private   recipes: Recipe[]=[
    new Recipe('Pizza', 'desc for Pizza','https://bit.ly/38G8AeJ'),
    new Recipe('tomato', 'desc for tomato','https://bit.ly/3cTFUC6'),

  ];

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }
}
