import ToDo from './ToDo.js'
import {addTodo, addToLocalStorage, getFromLocalStorage} from './ls.js'
import {displayAllToDos, displayActiveToDos, displayCompletedToDos} from './utilities.js'

export var toDoObj = new ToDo();

// add an eventListener on form, and listen for submit event
toDoObj.getToDoForm().addEventListener('submit', function(event) {
  // prevent the page from reloading when submitting the form
  event.preventDefault();
  toDoObj.addTodo(toDoObj.getToDoInput().value); // call addTodo function with input box current value
});

toDoObj.getToDoItemsList().addEventListener('click', function(event) {
  // check if the event is on checkbox
  if (event.target.type === 'checkbox') {
    // toggle the state
    toDoObj.toggle(event.target.parentElement.getAttribute('data-key'));
  }

  // check if that is a delete-button
  if (event.target.classList.contains('delete-button')) {
    // get id from data-key attribute's value of parent <li> where the delete-button is present
    toDoObj.deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});

// event listener to display all items on todo list
document.getElementById("allToDoFilter").addEventListener('click', function(){
  displayAllToDos();
});

// event listener to display only the items that are not yet completed on todo list
document.getElementById("activeToDoFilter").addEventListener('click', function(){
  displayActiveToDos();
});

// event listener to display only the items that have been completed on todo list
document.getElementById("completedToDoFilter").addEventListener('click', function(){
  displayCompletedToDos();
});

// initially get everything from localStorage
getFromLocalStorage();
