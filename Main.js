// const color = document.querySelector("input#color");
// const Body = document.querySelector("body");
// const ul = document.querySelector("ul");
// const h2 = document.querySelector("h2");
// const btn = document.querySelector("button");
// // get colors from localstrg
// const LastColor = localStorage.getItem("color");
// const Fullcolors = localStorage.getItem("Allcolors");
// let colorHistroy = JSON.parse(Fullcolors) || [];
// // function getContrastColor(hexColor) {
// //   const color = hexColor.replace("#", "");
// //   const r = parseInt(color.slice(0, 2), 16);
// //   const g = parseInt(color.slice(2, 4), 16);
// //   const b = parseInt(color.slice(4, 6), 16);
// //   // formula: brightness
// //   const brightness = (r * 299 + g * 587 + b * 114) / 1000;
// //   // return white or black depending on brightness
// //   return brightness > 128 ? "#000000" : "#FFFFFF";
// // }
// const Setcolors = () => {
//   Body.style.backgroundColor = `${LastColor}`;
//   color.value = LastColor;
//   colorHistroy.forEach((color, index) => {
//     const li = document.createElement("li");
//     li.textContent = `${index + 1} : ${color}`;
//     ul.appendChild(li);
//     li.style.backgroundColor = color;
//     li.style.color = "#fff";
//   });
// };

// // changing
// color.addEventListener("input", () => {
//   h2.style.color = colorHistroy[2];
//   Body.style.backgroundColor = `${color.value}`;
//   colorHistroy.push(color.value);
//   localStorage.setItem("color", color.value);
//   localStorage.setItem("Allcolors", JSON.stringify(colorHistroy));
//   const li = document.createElement("li");
//   colorHistroy.forEach((color, index) => {
//     li.textContent = `${index + 1} : ${color}`;
//     ul.appendChild(li);
//     li.style.backgroundColor = color;
//     li.style.color = "#fff";
//   });
// });
// btn.addEventListener("click", () => {
//   localStorage.clear();
//   ul.innerHTML = "";
//   color.value = "";
//   Body.style.backgroundColor = "#fff";
// });
// Setcolors();

// console.log("2e014b".substr(0, 2));
// console.log("2e014b".substr(2, 2));
// console.log("2e014b".substr(4, 6));
// console.log("*".repeat(10));
// console.log("2e014b".slice(0, 2));
// console.log("2e014b".slice(2, 4));
// console.log("2e014b".slice(4, 6));
// console.log("2e014b");
// console.log(parseInt("2e014b".slice(0, 2), 16));
// console.log(parseInt("2e014b".slice(2, 4), 16));
// console.log(parseInt("2e014b".slice(4, 7), 16));

const sound = document.querySelector("audio");
const Playbtn = document.querySelector("button");
const Pausebtn = document.querySelector("button.stop");
Playbtn.addEventListener("click", () => {
  setTimeout(() => {
    sound.play();
    console.log("done");
  }, 300);
});

Pausebtn.addEventListener("click", () => {
  setTimeout(() => {
    sound.pause();
    console.log("done");
  }, 300);
});

// properties
console.log(sound.audioTracks);
console.log(sound.currentTime);
console.log(sound.duration);
console.log(sound.playbackRate);
console.log(sound.volume);
console.log(sound.src);

sound.addEventListener("timeupdate", (e) => {
  console.log("wakhtiga Muuqalka :", e.target.duration);
  console.log("wakhtiga uu marayo", e.target.currentTime);
});
