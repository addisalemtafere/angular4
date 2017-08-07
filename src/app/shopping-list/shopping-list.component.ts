import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../Shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];


  private subScription: Subscription;

  constructor(private slServices: ShoppingListService) {
  }

  ngOnInit() {

    this.ingredients = this.slServices.getIngrdeient();
    this.subScription = this.slServices.ingredientChanged
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }

  ngOnDestroy(): void {
    this.subScription.unsubscribe();
  }

  onEditItem(index: number) {
    this.slServices.startEditing.next(index);
  }


}
