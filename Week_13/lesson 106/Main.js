//Events Simulation
let file = document.getElementById("file");
let input = document.querySelector("input");

input.focus();

input.addEventListener("input", function () {
  if (input.value.length === 10) {
    file.click();
  }
});
