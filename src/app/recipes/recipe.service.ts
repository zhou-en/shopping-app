import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is a test',
            'https://www.thespruceeats.com/thmb/cO72JFFH0TCAufENSxUfqE8TmKw=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Another Recipe',
            'This is also a test',
            'https://www.thespruceeats.com/thmb/cO72JFFH0TCAufENSxUfqE8TmKw=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]
        )
    ]

    constructor(private slService: ShoppingListService) {
    }

    getRecipes() {
        // slice return a copy of the list
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
