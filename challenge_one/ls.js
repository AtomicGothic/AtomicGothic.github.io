import toDoObj from './main.js'

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
export function addToLocalStorage(toDosList) {
    // convert the array to string then store it.
    localStorage.setItem('toDos', JSON.stringify(toDosList));
    // render them to screen
    toDoObj.renderToDos(toDosList);
  }

  // function helps to get everything from local storage
export function getFromLocalStorage() {
    const reference = localStorage.getItem('toDos');
    // if reference exists
    if (reference) {
      // converts back to array and store it in toDos array
      toDoObj.setToDoList(JSON.parse(reference));
      toDoObj.renderToDos(toDoObj.getToDoList());
    }
  }