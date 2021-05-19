class ToDo {
    constructor(content, completed){
        this.content = content;
        this.completed = completed;
    }
}

var task = new ToDo(document.getElementById("taskInput").value, false);
var foo = 5;

function addTask() {
    console.log(foo);
}