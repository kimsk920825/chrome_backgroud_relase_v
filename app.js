const title = document.querySelector("div.hello h1:nth-child(3)");

console.dir(title);
//함수 모음
function handleClickEvent() {
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "Mouse has just entered!";
}
function handleMouseleave() {
  title.innerText = "Mouse is gone!";
}

function resizeColorChange() {
  document.body.style.backgroundColor = "tomato";
}
function copyHandler() {
  alert("just copied!");
}

function wifiOffLine() {
  alert("wifi is off!! connect wifi!");
}

function wifiOnLine() {
  alert("wifi is on!! good!!");
}
//이벤트 리스너 작동 모음
title.addEventListener("click", handleClickEvent);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseleave);
window.addEventListener("resize", resizeColorChange);
window.addEventListener("copy", copyHandler);
window.addEventListener("offline", wifiOffLine);
window.addEventListener("online", wifiOnLine);
