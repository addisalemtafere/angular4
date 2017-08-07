import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipe() {
    const token = this.authService.getToken();

    return this.http.put('https://angular4-6de3a.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipe() {

    const token = this.authService.getToken();

    this.http.get('https://angular4-6de3a.firebaseio.com/recipes.json?auth=' + token)
      .subscribe(
        (response: Response) => {
          const recipe: Recipe[] = response.json();
          this.recipeService.setRecipe(recipe);
        }
      );
  }
}
