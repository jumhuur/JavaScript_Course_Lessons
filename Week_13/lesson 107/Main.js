// Example
const inputes = document.querySelectorAll("input");
console.log(inputes);
inputes[0].focus();
inputes.forEach((input, index) => {
  let Possition = 0;
  input.addEventListener("input", () => {
    if (input.value.length === 1) {
      input.blur();
      Possition = index;
      Possition <= 3 && inputes[Possition + 1].focus();
    } else if (input.value.length === 0) {
      input.blur();
      Possition = index;
      Possition >= 0 && inputes[Possition - 1].focus();
    }
  });
});
