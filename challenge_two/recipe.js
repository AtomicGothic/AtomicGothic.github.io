import { getJSON } from "./utilities.js";
import { config } from "./config.js";

export default class Recipe {
    constructor() {
        this.baseUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + config.apiKey + "&";
        this._recipes = [];
    }

    async getRecipesSuggestions(ingredients){
        const query = this.baseUrl + ingredients[0];
        for (var i = 1; i < ingredients.length(); i++){
            query = query + ",+" + ingredients[1];
        }
        console.log(query);
        this._recipes = await getJSON(query);
        return this._recipes;
    }
}
