const loginForm = document.getElementById("loginForm");
const todoForm = document.getElementById("todoForm");
const btn = document.getElementById("loginBtn");
const result = document.getElementById("result");

function login(e)
{
    e.preventDefault();
    const id = loginForm.querySelector("input[type=text]").value;
    localStorage.setItem("id", id);
    loginForm.classList.add('hide');
    result.classList.remove('hide');
    result.innerText = `Hello ${id}!`;
    todoForm.classList.remove('hide')
}
btn.addEventListener("click", login);

const userInfo = localStorage.getItem("id");

if (userInfo) {
    loginForm.classList.add('hide');
    result.classList.remove('hide');
    result.innerText = `Hello ${userInfo}!`;
    todoForm.classList.remove('hide');
} else {
    loginForm.classList.remove('hide');
    result.classList.add('hide');
    todoForm.classList.add('hide');
}