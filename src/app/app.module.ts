import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {DropdownDirective} from './Shared/dropdown.directive';

import {RecipesComponent} from './recipes/recipes.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {RecipesEditComponent} from './recipes/recipes-edit/recipes-edit.component';

import {RecipeService} from './recipes/recipe.service';
import {ShoppingListService} from './shopping-list/shopping-list.service';

import {ShoppinEditComponent} from './shopping-list/shoppin-edit/shoppin-edit.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

import {AppRoutingModule} from './app-routing.module';
import {DataStorageService} from './Shared/data-storage.service';
import {SingUpComponent} from './auth/sing-up/sing-up.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthService} from './auth/auth.service';
import {AuthGuardService} from "./auth/auth-guard.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppinEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipesEditComponent,
    SingUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
  AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
