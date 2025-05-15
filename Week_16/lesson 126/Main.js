const btn = document.querySelector("button");
const btn2 = document.querySelector("button.p");
const audio = document.querySelector("audio");
let count = 0;
let valume = 0;
let update = 0;

btn.addEventListener("click", () => {
  audio.play();
});
btn2.addEventListener("click", () => {
  audio.pause();
});

events;
audio.addEventListener("playing", () => {
  count++;
  console.log(`play time is ${count}`);
});

audio.addEventListener("volumechange", () => {
  valume++;
  console.log(valume);
});

audio.addEventListener("timeupdate", () => {
  update++;
  console.log(update);
});

audio.addEventListener("ended", () => {
  console.log("wuu dhamaaday");
});
