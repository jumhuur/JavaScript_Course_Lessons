// Events
const input = document.querySelector("input");

input.oncopy = () => {
  console.log("copy");
};

input.onpaste = function past() {
  console.log("paste");
};

input.oncut = function () {
  console.log("cut");
};

// input

// focus
input.onfocus = function () {
  console.log("focus");
};

// blur
input.onblur = () => {
  console.log("bluer");
};

// input
input.oninput = () => {
  console.log(input.value);
};
