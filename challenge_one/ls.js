import {toDoObj} from './main.js'

var toDoList = [];
// function to add todo
export function addTodo(item) {
    // if item is not empty
    if (item !== '') {
      // make a todo object, which has id, name, and completed properties
      const todo = {
        id: Date.now(),
        name: item,
        completed: false
      };

      // then add it to toDos array
      toDoObj.getToDoList().push(todo);
      addToLocalStorage(toDoObj.getToDoList()); // then store it in localStorage

      // finally clear the input box value
      toDoObj.getToDoInput().value = '';
    }
  }

  // function to add toDos to local storage
export function addToLocalStorage(toDos) {
    // convert the array to string then store it.
    localStorage.setItem('toDos', JSON.stringify(toDos));
    // render them to screen
    toDoObj.renderToDos(toDos);
  }

  // function helps to get everything from local storage
export function getFromLocalStorage() {
    const reference = localStorage.getItem('toDos');
    // if reference exists
    if (reference) {
      // converts back to array and store it in toDos array
      toDoList = JSON.parse(reference);
      toDoObj.setToDoList(toDoList);
      toDoObj.renderToDos(toDoObj.getToDoList());
    }
  }
