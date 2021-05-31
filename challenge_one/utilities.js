import {toDoObj} from './main.js'

export function displayAllToDos(){
  //reverts the other filters to white
  if (document.getElementById("activeToDoFilter").style.color === "green"){
    document.getElementById("activeToDoFilter").style.color = "#f7f7ff";
  }
  if (document.getElementById("completedToDoFilter").style.color === "green"){
    document.getElementById("completedToDoFilter").style.color = "#f7f7ff";
  }

  //set the clicked element to green
  document.getElementById("allToDoFilter").style.color = "green";

  //all items on todo list should be visible
  for (let i = 0; i < document.getElementsByClassName("item").length; i++){
    document.getElementsByClassName("item")[i].style.visibility = "visible";
  }
}

export function displayActiveToDos(){
  //reverts the other filters to white
  if (document.getElementById("allToDoFilter").style.color === "green"){
    document.getElementById("allToDoFilter").style.color = "#f7f7ff";
  }
  if (document.getElementById("completedToDoFilter").style.color === "green"){
    document.getElementById("completedToDoFilter").style.color = "#f7f7ff";
  }

  //set the clicked element to green
  document.getElementById("activeToDoFilter").style.color = "green";

  //go through all items on the todo list and only make invisible the items that checked off
  for (let i = 0; i < document.getElementsByClassName("item").length; i++){
    if(document.getElementsByClassName("checkbox")[i].checked === true){
      document.getElementsByClassName("item")[i].style.visibility = "collapse";
    }
    if(document.getElementsByClassName("checkbox")[i].checked === false){
      document.getElementsByClassName("item")[i].style.visibility = "visible";
    }
  }
}

export function displayCompletedToDos() {
  //reverts the other filters to white
  if (document.getElementById("allToDoFilter").style.color === "green"){
    document.getElementById("allToDoFilter").style.color = "#f7f7ff";
  }
  if (document.getElementById("activeToDoFilter").style.color === "green"){
    document.getElementById("activeToDoFilter").style.color = "#f7f7ff";
  }

  //set the clicked element to green
  document.getElementById("completedToDoFilter").style.color = "green";

  //go through all items on the todo list and make invisible only the items that are not checked off
  for (let i = 0; i < document.getElementsByClassName("item").length; i++){
    if(document.getElementsByClassName("checkbox")[i].checked === false){
      document.getElementsByClassName("item")[i].style.visibility = "collapse";
    }
    if(document.getElementsByClassName("checkbox")[i].checked === true){
      document.getElementsByClassName("item")[i].style.visibility = "visible";
    }
  }
}
