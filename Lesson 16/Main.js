// type of

const Price = 190;
const Total = 190.78;
const Item = "mobile";
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const data = {
  key: "value",
};
const bilaaqiimo = undefined;
const madhan = null;

console.log(typeof Price); // number
console.log(typeof Total); // number
console.log(typeof Item); // string
console.log(typeof list); // object
console.log(typeof data); // object
console.log(typeof bilaaqiimo); // undefined
console.log(typeof madhan); // object
console.log(Array.isArray(list)); // true
console.log(Array.isArray(data)); // false
