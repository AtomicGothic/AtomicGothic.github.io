import Pantry from "./pantry.js";
import { getFromLocalStorage } from "./utilities.js";

export let myPantry = new Pantry();

myPantry.getPantryForm().addEventListener('submit', function(event){
    event.preventDefault();
    myPantry.addPantryItem(myPantry.getPantryInput().value);
});

myPantry.getPantryItemsList().addEventListener('click', function(event){
    if (event.target.classList.contains('delete-button')) {
        myPantry.deletePantryItem(event.target.parentElement.getAttribute('data-key'));
    }
});

getFromLocalStorage();
