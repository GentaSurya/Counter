const increase = document.querySelector(".js-increase");
const decrease = document.querySelector(".js-decrease");
const container = document.querySelector(".js-container");

let number = document.querySelector(".js-num");

let num = [];
let audio;

increase.addEventListener("click", () => {
  num++;
  number.innerHTML = num;
  countUp();
});

decrease.addEventListener("click", () => {
  num--;
  number.innerHTML = num;
  countDown();
});

function countUp() {
  playAudio();

  number.classList.add("moveUp");
  container.classList.add("changeBg");

  setTimeout(() => {
    number.classList.remove("moveUp");
    container.classList.remove("changeBg");
  }, 400);
}

function countDown() {
  playAudio();

  number.classList.add("moveDown");
  container.classList.add("changeBg");

  setTimeout(() => {
    number.classList.remove("moveDown");
    container.classList.remove("changeBg");
  }, 400);
}

function playAudio() {
  audio = new Audio("audio/click-btn.mp3");
  audio.play();
}
