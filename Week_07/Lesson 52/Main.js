//
// while (cond) {
//   // code

const numbers = [1, 2, 3, 4, 5];
let Names = ["Maxamad", "Xasan", "Marwa", "Asma", "Farax"];
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

let x = 0;
while (x < Names.length) {
  if (Names[x] === "Marwa") {
    break;
  }
  console.log(Names[x]);
  x++;
}
