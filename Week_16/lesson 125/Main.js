const btn = document.querySelector("button");
const btn2 = document.querySelector("button.p");
const audio = document.querySelector("audio");

btn.addEventListener("click", () => {
  audio.play();
});
btn2.addEventListener("click", () => {
  audio.pause();
});
