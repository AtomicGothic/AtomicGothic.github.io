import Pantry from "./pantry.js";
import { getFromLocalStorage, getCurrentPageFileName } from "./utilities.js";

export let myPantry = new Pantry();

let pantry_view_html = getCurrentPageFileName();

if ( pantry_view_html === "pantry.html"){
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
}
