import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../Shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shoppin-edit',
  templateUrl: './shoppin-edit.component.html',
  styleUrls: ['./shoppin-edit.component.css']
})
export class ShoppinEditComponent implements OnInit, OnDestroy {


  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  ingredient: Ingredient;

  constructor(private slServices: ShoppingListService) {
  }


  ngOnInit() {
    this.subscription = this.slServices.startEditing
      .subscribe((index: number) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.ingredient = this.slServices.getIngredientEdit(index);
        this.slForm.setValue({
          name: this.ingredient.name,
          amount: this.ingredient.amount

        });
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {

    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slServices.updateIngredient(this.editItemIndex, newIngredient);
    }
    else {
      this.slServices.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();

  }

  onDelete() {

    this.slServices.deleteIngredient(this.editItemIndex);
    this.onClear();

  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
}
