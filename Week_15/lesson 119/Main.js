const backBtn = document.querySelector("button.back");
const forwardBtn = document.querySelector("button.forward");
// console.log(window.history);
// console.log(history);
console.log(window.history.length);

// methods
backBtn.addEventListener("click", () => {
  history.go(-2);
});

forwardBtn.addEventListener("click", () => {
  history.go(1);
});
