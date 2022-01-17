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
  greeting.innerHTML = `Hello ${username}`;
}

if (usernameValue === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greetingHandle(usernameValue);
}

/*
form은 수긱고 h1은 표시하라.
하지만 h1에 표시할 텍스트가 있을때만 표시하라
브라우저의 기본 동작을 방지하고
input값을 username에 저장하며
로그인 폼을 없애주고
username을 h1태그에 나올 수 있게 세팅하라.
*/
