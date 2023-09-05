import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/Iingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import { Subject } from "rxjs";
@Injectable()
export class RecipeService{

    OnSelected= new Subject<Recipe>;

    private recipes: Recipe[] =[
        new Recipe("A Test Recipe",
        "This is a test",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Illustrated_recipes%3B_%27Minted_Pineapple%27%2C_%27Quick_Tomato_Mold%27_Wellcome_L0072307.jpg/1200px-Illustrated_recipes%3B_%27Minted_Pineapple%27%2C_%27Quick_Tomato_Mold%27_Wellcome_L0072307.jpg",
        [
            new Ingredient("Meat",2),
            new Ingredient("Fish",5)
        ]),
        new Recipe("2nd Test Recipe",
        "This is a 2nd test",
        "https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        [
            new Ingredient("Fries",3),
            new Ingredient("Sauce",6)
        ])
      ];

     constructor(private shoppingListService: ShoppingListService){

     } 

     getRecipes(){
        return this.recipes.slice();
     } 
     getRecipesById(id:number){
       return this.recipes.slice()[id];
     }
     addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
     }
}