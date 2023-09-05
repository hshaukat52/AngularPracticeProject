import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/Iingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingredientChanged= new Subject<Ingredient[]>();

    private ingredients: Ingredient[]= [
        new Ingredient('Apples',5),
        new Ingredient('Apples',10),
      ];

      getIngredients(){
        return this.ingredients.slice();
      }
      
      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
      }
      
      addIngredients(ingredients :Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice())
      }
}