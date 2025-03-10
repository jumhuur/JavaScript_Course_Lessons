const input = document.querySelector("input");

// onkeydown
// input.onkeydown = function Event() {
//   let value = input.value;
//   console.log(value);
// };

// onkeypress
input.onkeypress = () => {
  console.log(input.value);
};

// onkeyup
input.onkeyup = () => {
  console.log(input.value);
};
