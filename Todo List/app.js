var input = document.getElementById("todoInput")
var ulParent = document.getElementById("ulParent")


function addTodo() {
    if (!input.value) {
        alert("ENTER TODO VALUE")
        return
    }
    
    var liElement = document.createElement("li")

    var liTxt = document.createTextNode(input.value)

    liElement.appendChild(liTxt)

    liElement.className ="mt-1 list-group-item d-flex align-items-center justify-content-between rounded-4 bg-body-secondary "

    var div = document.createElement("div")

    var editBtn = document.createElement("button")

    var deleteBtn = document.createElement("button")

    editBtn.innerHTML = "EDIT"

    editBtn.setAttribute("onclick", "editTodo(this)")

    deleteBtn.innerHTML = "DEL"

    deleteBtn.setAttribute("onclick", "deleteTodo(this)")

    editBtn.className = "btn btn-dark rounded-5 "

    deleteBtn.className = "btn btn-danger rounded-5"

    div.appendChild(editBtn)

    div.appendChild(deleteBtn)

    liElement.appendChild(div)

    ulParent.appendChild(liElement)

    input.value = ""

}


function editTodo(el) {
    console.log("editTodo()", el.parentNode.parentNode.
        firstChild.nodeValue)

    var li = el.parentNode.parentNode

    var placeHolder = li.firstChild.nodeValue

    var editValue = prompt("Edit Todo", placeHolder)

    console.log("editValue", editValue)

    li.firstChild.nodeValue = editValue

}

function deleteTodo(elem) {

    elem.parentNode.parentNode.remove()
}



// // select elements
// var todoInput = document.getElementById('todo-input');
// var addBtn = document.getElementById('add-btn');
// var todoList = document.getElementById('todo-list');

// // array to store todos
// let todos = [];

// // function to render todos
// function renderTodos() {
//     // clear existing todos
//     todoList.innerHTML = '';

//     // loop through todos and create li elements
//     for (let i = 0; i < todos.length; i++) {
//         const todo = todos[i];

//         const li = document.createElement('li');
//         li.className = 'list-group-item d-flex justify-content-between align-items-center';
//         li.innerText = todo.title;

//         const checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         checkbox.checked = todo.completed;
//         checkbox.addEventListener('change', () => {
//             toggleCompleted(i);
//         });

//         const deleteBtn = document.createElement('button');
//         deleteBtn.className = 'btn btn-danger btn-sm';
//         deleteBtn.innerText = 'X';
//         deleteBtn.addEventListener('click', () => {
//             deleteTodo(i);
//         });

//         li.appendChild(checkbox);
//         li.appendChild(deleteBtn);

//         if (todo.completed) {
//             li.classList.add('completed');
//         }

//         todoList.appendChild(li);
//     }
// }

// // function to add a new todo
// function addTodo() {
//     const title = todoInput.value.trim();

//     if (title === '') {
//         return;
//     }

//     const todo = {
//         title: title,
//         completed: false,
//     };

//     todos.push(todo);

//     renderTodos();

//     todoInput.value = '';
// }

// // function to toggle the completed status of a todo
// function toggleCompleted(index) {
//     todos[index].completed = !todos[index].completed;

//     renderTodos();
// }

// // function to delete a todo
// function deleteTodo(index) {
//     todos.splice(index, 1);

//     renderTodos();
// }

// // add event listener to add button
// addBtn.addEventListener('click', (e) => {
//     e.preventDefault();

//     addTodo();
// });

// // render initial todos
// renderTodos();
