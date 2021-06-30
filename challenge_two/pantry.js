import { addToLocalStorage, getFromLocalStorage } from "./utilities.js";
// local private variables
const pantryForm = document.querySelector('.pantryForm');
const pantryInput = document.querySelector('.pantryInput')
const pantryItemsList = document.querySelector('.pantryItems');
let myPantry = [];


export default class Pantry{
    constructor (){
    };

    //getters
    getMyPantry() {
        return myPantry;
    }
    getPantryForm() {
        return pantryForm;
    }
    getPantryInput() {
        return pantryInput;
    }
    getPantryItemsList() {
        return pantryItemsList;
    }

    //setters
    setMyPantryList(pantryList){
        myPantry = pantryList;
    }

    renderPantry(pantryItems) {
        // clear everything inside <ul> with class=todo-items
        pantryItemsList.innerHTML = '';

        // run through each item inside toDos
        myPantry.forEach(function(item) {
          // make a <li> element and fill it
          // <li> </li>
          const li = document.createElement('li');
          // <li class="item"> </li>
          li.setAttribute('class', 'item');
          // <li class="item" data-key="20200708"> </li>
          li.setAttribute('data-key', item.id);
          // EXAMPLE:
          /* <li class="item" data-key="20200708">
                Apples
                <button class="delete-button">X</button>
              </li> */
          li.innerHTML = `
            ${item.name}
            <button class="delete-button">X</button>
          `;
          // finally add the <li> to the <ul>
          pantryItemsList.append(li);
        });

      }
      // function to add todo
      addPantryItem(item) {
        // if item is not empty
        if (item !== '') {
          // make a todo object, which has id, name, and completed properties
          const pantryItem = {
            id: Date.now(),
            name: item
          };

          // then add it to toDos array
          myPantry.push(pantryItem);
          addToLocalStorage(myPantry); // then store it in localStorage

          // finally clear the input box value
          pantryInput.value = '';
        }
      }

      // deletes a todo from toDos array, then updates localStorage and renders updated list to screen
      deletePantryItem(id) {
        // filters out the <li> with the id and updates the toDos array
        myPantry = myPantry.filter(function(item) {
          return item.id != id;
        });

        // update the localStorage
        addToLocalStorage(myPantry);
      }

}
//end of class Pantry
