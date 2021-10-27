// Selector
const todoInput = document.querySelector(".todo-input")
const todoBtn = document.querySelector(".todo-btn")
const todoList = document.querySelector(".todo-list")
const filterOption = document.querySelector(".filter-option")


// Event Listener
todoBtn.addEventListener("click", addTodo)
todoList.addEventListener("click", deletecheck)
filterOption.addEventListener("click", filterTodo)


// Function
function addTodo(event){
    event.preventDefault();

    if(todoInput.value !== ""){
    // Create Div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    // Create LI
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo);
    // Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = 'Check';
    completedButton.classList.add('complete-button');
    todoDiv.appendChild(completedButton);
    // Create Delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = 'Delete';
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);
    // Append to List
    todoList.appendChild(todoDiv)
    //  Clear input field after entering todo task
    todoInput.value = ""
    }
}

function deletecheck(event){
    const item = event.target;
    if(item.classList[0] === 'trash-button'){
        const todo = item.parentElement
        todo.classList.add('fall')
        todo.addEventListener("transitionend", function(){
            todo.remove()
        })
    }
    if(item.classList[0] === "complete-button"){
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        if(todo.nodeName !== "#text"){
            switch(e.target.value){
                case 'all':
                    todo.style.display = 'flex';
                    break;
                case 'completed':
                    if(todo.classList.contains('completed'))
                        todo.style.display = 'flex';
                    else
                        todo.style.display = 'none';
                    break;
                case 'uncompleted':
                    if(!todo.classList.contains('completed'))
                        todo.style.display = 'flex';
                    else
                    todo.style.display = 'none';
                    break;
            }
        }
    }
)
   
}