import { getJSON } from "./utilities.js";
import { config } from "./config.js";

export default class Recipe {
    constructor() {
        this.baseUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + config.apiKey + "&";
        this._recipes = [];
    }

    async getRecipesSuggestions(ingredients){
        let query = this.baseUrl + "ingredients=" + ingredients[0];
        for (var i = 1; i < ingredients.length; i++){
            query = query + ",+" + ingredients[i];
        }
        console.log(query);
        this._recipes = await getJSON(query);
        return this._recipes;
    }

    async getSearchedRecipes(ingredient){
        let query = this.baseUrl + "ingredients=" + ingredient;
        console.log(query);
        this._recipes = await getJSON(query);
        return this._recipes;
    }
}
