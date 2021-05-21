const toDoForm = document.querySelector('.toDoForm');
const toDoInput = document.querySelector('.toDoInput');
const toDoItemsList = document.querySelector('.toDoItems');

// array which stores every toDos
let toDos = [];

// add an eventListener on form, and listen for submit event
toDoForm.addEventListener('submit', function(event) {
  // prevent the page from reloading when submitting the form
  event.preventDefault();
  addTodo(toDoInput.value); // call addTodo function with input box current value
});

// function to add todo
function addTodo(item) {
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

// function to render given toDos to screen
function renderToDos(toDos) {
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

// function to add toDos to local storage
function addToLocalStorage(toDos) {
  // convert the array to string then store it.
  localStorage.setItem('toDos', JSON.stringify(toDos));
  // render them to screen
  renderToDos(toDos);
}

// function helps to get everything from local storage
function getFromLocalStorage() {
  const reference = localStorage.getItem('toDos');
  // if reference exists
  if (reference) {
    // converts back to array and store it in toDos array
    toDos = JSON.parse(reference);
    renderToDos(toDos);
  }
}

// toggle the value to completed and not completed
function toggle(id) {
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
function deleteTodo(id) {
  // filters out the <li> with the id and updates the toDos array
  toDos = toDos.filter(function(item) {
    return item.id != id;
  });

  // update the localStorage
  addToLocalStorage(toDos);
}

// initially get everything from localStorage
getFromLocalStorage();

// after that addEventListener <ul> with class=todoItems. Because we need to listen for click event in all delete-button and checkbox
toDoItemsList.addEventListener('click', function(event) {
  // check if the event is on checkbox
  if (event.target.type === 'checkbox') {
    // toggle the state
    toggle(event.target.parentElement.getAttribute('data-key'));
  }

  // check if that is a delete-button
  if (event.target.classList.contains('delete-button')) {
    // get id from data-key attribute's value of parent <li> where the delete-button is present
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});
