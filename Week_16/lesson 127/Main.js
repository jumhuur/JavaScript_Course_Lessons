const btn = document.querySelector("button");
const btn2 = document.querySelector("button.p");
const audio = document.querySelector("audio");

btn.addEventListener("click", () => {
  audio.play();
});
btn2.addEventListener("click", () => {
  audio.pause();
});

// Properties

audio.addEventListener("timeupdate", () => {
  // duration
  // console.log(audio.duration); // s
  //currentTime
  //console.log(audio.currentTime);
  //playbackRate
  //console.log(audio.playbackRate);
  // volume
  console.log(audio.volume);
});
