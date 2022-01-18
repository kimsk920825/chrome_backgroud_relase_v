const background = ["photo1.jpeg", "photo2.jpeg", "photo3.jpeg"];

const chosenImg = background[Math.floor(Math.random() * background.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImg}`;

bgImage.classList.add("bgImage");

document.body.prepend(bgImage);

console.log(bgImage);

/*
//bg.js 
 
const body = document.querySelector("body");
 
const IMG_NUMBER = 5;
 
function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`; // 가져올 image경로 지정
  image.classList.add("bgImage"); // image에 bgImage 클래스 추가 
  body.appendChild(image); // body의 자식에 image추가
}
 
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
 
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
 
init();
 */
