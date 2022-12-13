const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greetUser = document.querySelector("#greet-username");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetUser(username);
}

function paintGreetUser(username) {
    greetUser.innerText = `Welcome ${username}`;
    greetUser.classList.remove(HIDDEN_CLASSNAME);
}


const localStorageUsername = localStorage.getItem(USERNAME_KEY);

if(localStorageUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
} else {
    paintGreetUser(localStorageUsername);
}