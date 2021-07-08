import { myPantry } from "./pantry_view.js";

var pantryList = [];
export function getJSON(url) {
    return fetch(url)
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            //console.log(response.json());
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

export function setPantryFromLocalStorage(){
    const reference = localStorage.getItem('pantry');
    if (reference) {
        pantryList = JSON.parse(reference);
        myPantry.setMyPantryList(pantryList);
        myPantry.renderPantry(myPantry.getPantryItemsList());
    }
}

export function getIngredientsFromLocalStorage(){
    const reference = localStorage.getItem('pantry');
    let ingredients = [];
    if (reference) {
        pantryList = JSON.parse(reference);

        for (let i = 0; i < pantryList.length; i++){
            ingredients.push(pantryList[i].name);
        }
        return ingredients;
    }
}

export function getCurrentPageFileName() {
    // Splits each part of the current URL as an array split by '/'.
    // Since the split function returns an array that starts at zero, getting the
    //   final part of the pathname bust be the length of the array minus 1.
    return window.location.pathname.split('/')[(window.location.pathname.split('/')).length - 1];
}