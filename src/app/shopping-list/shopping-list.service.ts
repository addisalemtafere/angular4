import {Ingredient} from '../Shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

/**
 * Created by addis on 8/21/17.
 */


export class ShoppingListService {

  ingredientChanged = new Subject<Ingredient[]>();
  startEditing = new Subject<Number>();


  private ingredients: Ingredient[] = [
    new Ingredient('apple', 4),
    new Ingredient('Tomato', 5)
  ];

  getIngrdeient() {
    return this.ingredients.slice();
  }
  getIngredientEdit(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {

    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());

  }

  addIngredients(ingredient: Ingredient[]) {

    this.ingredients.push(...ingredient);
    this.ingredientChanged.next(this.ingredients.slice());

  }
  updateIngredient(index: number , newIngreient: Ingredient){

    this.ingredients[index] = newIngreient;
    this.ingredientChanged.next(this.ingredients.slice());

  }

  deleteIngredient(index: number) {

    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());


  }
}
