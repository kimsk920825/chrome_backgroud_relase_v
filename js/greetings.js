const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const usernameValue = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(username);
  greetingHandle(username);
}
function greetingHandle(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = `${username}`;
  greeting.classList.add("jb-white");
}

if (usernameValue === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greetingHandle(usernameValue);
}
