// alert('hi')

const toDoForm = document.getElementById("todoForm");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDoArr = [];

function submitToDoList(e)
{
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDoArr.push(newTodoObj);
    addList(newTodoObj);
    saveToDoArr();   
}

function addList(todo)
{
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");
    btn.innerText = "DELETE";
    li.appendChild(span);
    li.appendChild(btn);
    span.innerText = todo.text;
    toDoList.appendChild(li);

    // toDoArr.push(todo);
    saveToDoArr();

    btn.addEventListener("click", delList);
}

function delList(e)
{
    const li = e.target.parentElement;
    li.remove();
    toDoArr = toDoArr.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDoArr();
}

function saveToDoArr()
{
    localStorage.setItem("toDoArr", JSON.stringify(toDoArr));
}

toDoForm.addEventListener("submit", submitToDoList);

const getToDoArr = localStorage.getItem("toDoArr");

if (getToDoArr) {
    const parseToDo = JSON.parse(getToDoArr);
    toDoArr = parseToDo;
    parseToDo.forEach(addList);
}

function filter()
{

}