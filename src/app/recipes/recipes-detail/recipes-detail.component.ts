import { Component,Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
recipe:Recipe;
id:number;


constructor(private recipeService: RecipeService, private route:ActivatedRoute, private router:Router){

}

ngOnInit(){
  // const id= this.route.snapshot.params['id'];
  this.route.params.subscribe(
    (params:Params)=>{
      this.id= +params['id'];
      this.recipe=this.recipeService.getRecipesById(this.id);
    }
  );

}
OnEditRecipe(){
  this.router.navigate(['edit'], {relativeTo: this.route})
}
addIngredientToShoppingList(){
  this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
}
}
