import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../Shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

/**
 * Created by addis on 8/21/17.
 */

@Injectable()
export class RecipeService {


  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('first name testing',
      'description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmPd-XroMMAI5ryjT35nYdoqYJdMxcWEstU_IQldwfdeJkqv9',
      [new Ingredient('ingredient', 9),
        new Ingredient('ingredint2', 10)]
    ),
    new Recipe('This is testing',
      'description',
      'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/cst1476.jpg?itok=ORaVwB2B',
      [new Ingredient('testing 1', 100),
        new Ingredient('testing 3', 200)])
  ];

  constructor(private  slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  setRecipe(recipe: Recipe[]) {
    this.recipes = recipe;
    this.recipeChanged.next(this.recipes.slice());

  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToshoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(newRecipe: Recipe) {

    this.recipes.push(newRecipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, updatedRecipe: Recipe) {

    this.recipes[index] = updatedRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

}
