import Recipe from "./recipe.js";
import { myPantry } from "./pantry_view.js";
import { getIngredientsFromLocalStorage, getCurrentPageFileName } from "./utilities.js";

let myRecipes = new Recipe();
let recipe_view_html = getCurrentPageFileName();

async function getMySuggestedRecipes(){
    const recipes = await myRecipes.getRecipesSuggestions(getIngredientsFromLocalStorage());
    return recipes;
}

async function getRecipesBySearchedIngredient(){
    const recipes = await myRecipes.getSearchedRecipes(document.getElementById('recipeSearch').value);
    return recipes;
}

async function renderSuggestedRecipes(recipes){
    console.log(recipes);
    let ul = document.getElementById('recipeList');
    ul.innerHTML = '';
    recipes.then(function(value){
        value.forEach(x =>{
            let li = document.createElement('li');
            let img = document.createElement('img');
            ul.appendChild(li);
            ul.appendChild(img);
            img.setAttribute('src', x.image);
            li.innerHTML += x.title;
        }),
        function(error) {
            console.log(error);
        };
    });
};
async function renderSearchedRecipes(recipes){
    console.log(recipes);
    let ul = document.getElementById('ulSearchedRecipes');
    ul.innerHTML = '';
    recipes.then(function(value){
        value.forEach(x =>{
            let li = document.createElement('li');
            let img = document.createElement('img');
            ul.appendChild(li);
            ul.appendChild(img);
            img.setAttribute('src', x.image);
            li.innerHTML += x.title;
        }),
        function(error) {
            console.log(error);
        };
    });
};

if(recipe_view_html === "recipes.html"){
    document.querySelector('.searchRecipesForm').addEventListener('submit', function(event){
        event.preventDefault();
        renderSearchedRecipes(getRecipesBySearchedIngredient());
    });
    document.querySelector('.loadRecipesForm').addEventListener('submit', function(event){
        event.preventDefault();
        renderSuggestedRecipes(getMySuggestedRecipes());
    });
}

