// filter()
const Mynumbers = [12, 45, 67, 88, 90, 23, 16, 8, 3, 7];
let numbers = Mynumbers.filter((numb) => {
  return numb % 2 === 0;
});

console.log(Mynumbers);

console.log(numbers);

const mytest = Mynumbers.filter(function (number) {
  return number % 2 > 0;
});

console.log(mytest);

const A_Names = [
  "ahmed",
  "fatima",
  "khalid",
  "hodan",
  "aadan",
  "anwaar",
  "Amjad",
];
const filtername = A_Names.filter(function (name) {
  return name.startsWith("A") || name.startsWith("a");
});

console.log(filtername);
