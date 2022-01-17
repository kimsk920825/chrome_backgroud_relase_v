const toDoForm = document.getElementById("todo-form");
const toDoListInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
//키 이름 설정
const TODOS_KEY = "todos";
//input에 입력된 데이터 저장용 array
let toDos = [];
//로컬 스토리지에 스트링화 후 저장
function storeToDos() {
  console.log(toDos);
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
//x버튼 누르면 데이터 날리기
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDos) => toDos.id != parseInt(li.id));
  storeToDos();
}
/*
화면 그리기
1. li 태그 만들기
2. span 태그 만들기
3. span에 입력값 저장
4. 버튼 태그 생성
5. 버튼에 x표시 저장
6. li에 span 태그 append
7. li에 button 태그 append
8. toDoList에 li태그 append
*/
function toPaintList(newList) {
  const li = document.createElement("li");
  li.id = newList.id;
  const span = document.createElement("span");
  span.innerText = newList.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

/*
입력된 값을 저장하고 출력함.
1. 인풋 값을 newList 변수에 저장
2. toDos Array에 값을 저장
3. 화면 그리기
4. 로컬 스토리지에 스트링화 후 저장
*/

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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//위 모든 함수 실행
toDoForm.addEventListener("submit", toDoListhandler);
//로컬 스토리지에 저장된 값 변수에 저장

//브라우저를 새로고칭하면 toDos 어레이 값은 없어짐
//브라우저를 새로고칭해도 로컬 스토리지에는 값이 남아 있음

const savedToDos = localStorage.getItem(TODOS_KEY);
/*
1. 로컬 스토리지에 저장된 값이 null이 아니라면
2. 로컬 스토리지에 저장된 값을 Array로 바꾸고 parsedToDos에 저장
3. 
*/
//브라우저를 새로고칭하면 toDos 어레이 값은 없어짐
//브라우저를 새로고칭하면 태그값들도 없어짐
//브라우저를 새로고침해도 로컬 스토리지에는 값이 남아 있음
//로컬 스토리지에 있는 값을 다시 출력
//브라우저를 새로고침하고 나서 값을 다시 입력하면 재설정된 array이 값이 들어가고 그 값이 로컬 스토리지에 저장되서 결과적으로 예전 데이터는 날라감.
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(toPaintList);
}
