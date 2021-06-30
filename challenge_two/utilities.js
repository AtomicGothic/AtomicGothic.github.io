import { myPantry } from "./pantry_view.js";

var pantryList = [];
export function getJSON(url) {
    return fetch(url)
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            console.log(response.json());
            return response.json();
        }
    })
    .catch(function(error) {
        console.log(error);
    });
}

export function addToLocalStorage(pantryItems) {
    localStorage.setItem('pantry', JSON.stringify(pantryItems));
    myPantry.renderPantry(pantryItems);
}

export function getFromLocalStorage(){
    const reference = localStorage.getItem('pantry');
    if (reference) {
        pantryList = JSON.parse(reference);
        myPantry.setMyPantryList(pantryList);
        myPantry.renderPantry(myPantry.getPantryItemsList());
    }
}