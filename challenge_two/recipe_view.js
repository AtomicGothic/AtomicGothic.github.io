import Recipe from "./recipe.js";
import { myPantry } from "./pantry_view.js";
import { getIngredientsFromLocalStorage, getCurrentPageFileName } from "./utilities.js";

let myRecipes = new Recipe();
let recipe_view_html = getCurrentPageFileName();

async function getMySuggestedRecipes(){
    const recipes = await myRecipes.getRecipesSuggestions(getIngredientsFromLocalStorage());
    return recipes;
}

async function renderSuggestionRecipes(recipes){
    let ul = document.getElementById('recipeList');
    for(let i = 0; i < recipes.length; i++){
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += recipes[i].title;
    };
};

if(recipe_view_html === "recipes.html"){
    document.querySelector('.recipesForm').addEventListener('submit', function(event){
        event.preventDefault();
        renderSuggestionRecipes(getMySuggestedRecipes());
    });
}

