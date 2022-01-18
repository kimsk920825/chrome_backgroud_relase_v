const toDoForm = document.getElementById("todo-form");
const toDoListInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function storeToDos() {
  console.log(toDos);
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDos) => toDos.id != parseInt(li.id));
  storeToDos();
}

function toPaintList(newList) {
  const li = document.createElement("li");
  li.id = newList.id;
  const span = document.createElement("span");
  span.innerText = newList.text;
  span.classList.add("box");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function toDoListhandler(event) {
  event.preventDefault();
  const newList = toDoListInput.value;
  toDoListInput.value = "";
  const newListObj = {
    text: newList,
    id: Date.now(),
  };
  toDos.push(newListObj);
  toPaintList(newListObj);
  storeToDos();
}

toDoForm.addEventListener("submit", toDoListhandler);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(toPaintList);
}
