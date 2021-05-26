import {addTodo, addToLocalStorage, getFromLocalStorage} from './ls.js'

// local private variables
const toDoForm = document.querySelector('.toDoForm');
const toDoInput = document.querySelector('.toDoInput');
const toDoItemsList = document.querySelector('.toDoItems');

// array which stores every toDos
let toDos = [];
export default class ToDo{
    // getters for local variables
    getToDoList(){
        return toDos;
    }
    getToDoForm(){
        return toDoForm;
    }
    getToDoInput(){
        return toDoInput;
    }
    getToDoItemsList(){
        return toDoItemsList;
    }

    //setters
    setToDoList(toDos){
        this.toDos = toDos;
    }

    // function to render given toDos to screen
    renderToDos(toDos) {
        // clear everything inside <ul> with class=todo-items
        toDoItemsList.innerHTML = '';

        // run through each item inside toDos
        toDos.forEach(function(item) {
          // check if the item is completed
          const checked = item.completed ? 'checked': null;

          // make a <li> element and fill it
          // <li> </li>
          const li = document.createElement('li');
          // <li class="item"> </li>
          li.setAttribute('class', 'item');
          // <li class="item" data-key="20200708"> </li>
          li.setAttribute('data-key', item.id);
          // EXAMPLE:
          /* <li class="item" data-key="20200708">
                <input type="checkbox" class="checkbox">
                Go to Gym
                <button class="delete-button">X</button>
              </li> */
          // if item is completed, then add a class to <li> called 'checked', which will add line-through style
          if (item.completed === true) {
            li.classList.add('checked');
          }

          li.innerHTML = `
            <input type="checkbox" class="checkbox" ${checked}>
            ${item.name}
            <button class="delete-button">X</button>
          `;
          // finally add the <li> to the <ul>
          toDoItemsList.append(li);
        });

      }
      // function to add todo
      addTodo(item) {
        // if item is not empty
        if (item !== '') {
          // make a todo object, which has id, name, and completed properties
          const todo = {
            id: Date.now(),
            name: item,
            completed: false
          };

          // then add it to toDos array
          toDos.push(todo);
          addToLocalStorage(toDos); // then store it in localStorage

          // finally clear the input box value
          toDoInput.value = '';
        }
      }

      // toggle the value to completed and not completed
      toggle(id) {
        toDos.forEach(function(item) {
          // use == not ===, because here types are different. One is number and other is string
          if (item.id == id) {
            // toggle the value
            item.completed = !item.completed;
          }
        });

        addToLocalStorage(toDos);
      }

      // deletes a todo from toDos array, then updates localStorage and renders updated list to screen
      deleteTodo(id) {
        // filters out the <li> with the id and updates the toDos array
        toDos = toDos.filter(function(item) {
          return item.id != id;
        });

        // update the localStorage
        addToLocalStorage(toDos);
      }
}
// end of class ToDo