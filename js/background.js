const background = ["photo1.jpeg", "photo2.jpeg", "photo3.jpeg"];
const chosenImg = background[Math.floor(Math.random() * background.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImg}`;
bgImage.classList.add("bgImage");
document.body.prepend(bgImage);
