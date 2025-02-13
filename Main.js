console.log("---------------- Exercises 32 -------------------");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Number = numbers.map((number) => {
  return number + number;
});
Number.forEach((eL) => {
  console.log(eL);
});

console.log("---------------- Exercises 33 -------------------");
const Result = numbers.filter((elnumb) => {
  return elnumb * elnumb > 40;
});
Result.forEach((num) => {
  console.log(num);
});

console.log("---------------- Exercises 34 -------------------");
const ResultTotal = numbers.reduce((acc, cvalue) => {
  return acc + cvalue;
}, 10);

console.log(ResultTotal);
