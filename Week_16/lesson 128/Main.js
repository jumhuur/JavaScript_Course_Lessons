const btn = document.querySelector("button");
const btn2 = document.querySelector("button.p");
const audio = document.querySelector("audio");

btn.addEventListener("click", () => {
  audio.play();
});
btn2.addEventListener("click", () => {
  audio.pause();
});

// set Properties
audio.addEventListener("timeupdate", () => {
  //currentTime
  const SoundTime = audio.currentTime;
  if (SoundTime > 10) {
    audio.currentTime = 0;
    audio.playbackRate = 2;
    audio.volume = 0.2;
  }
});
