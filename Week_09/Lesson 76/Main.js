// forEach()
const fruits = ["Apple", "Banana", "Orange", "shaykale"];

const loop = fruits.forEach(function (element) {
  console.log(element);
});

const numbers = [10, 20, 30];
const loop1 = numbers.forEach(function (numb, index) {
  console.log(`element : ${numb} = ${index} => `);
});
