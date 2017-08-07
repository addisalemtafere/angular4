import {Ingredient} from '../Shared/ingredient.model';
/**
 * Created by addis on 7/22/17.
 */


export class Recipe {

  public name: string;
  public descrption: string;
  public imagePath: string;
  public ingredient: Ingredient[];

  constructor(name: string, descrption: string, imagePath: string, ingredient: Ingredient[]) {
    this.name = name;
    this.descrption = descrption;
    this.imagePath = imagePath;
    this.ingredient = ingredient;
  }
}
