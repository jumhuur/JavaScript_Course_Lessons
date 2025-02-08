// map()
const names = ["ahmed", "fatima", "khalid", "hodan"];

const Isbadal = names.map(function ss(Element, index, Array) {
  return console.log(`${Element.toUpperCase()}`);
});

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sum = numbers.map(function iskudar(element, index, array) {
//   console.log(element + element);
// });

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.map(function iskudar(element, index, array) {
  return element + element;
});

console.log(sum);
console.log(Array.isArray(sum)); // Output : true

const UsersName = ["ahmed Ali", "fARAH Omar", "hassan Abdi"];

const formatname = UsersName.map(function format(element) {
  console.log(
    `${element.charAt(0).toUpperCase()}${element.slice(1).toLowerCase()}`
  );
});

const module = numbers.map((element) => {
  return element % 2;
});

console.log(module);

const username = ["ahmed", "fatima", "khalid", "hodan"];

const formatusernames = username.map((element) => {
  return `@${element}`;
});

console.log(formatusernames);

const Mynumbesr = [12, 45, 67, 88, 90, 23, 16, 8, 3, 7];

const evenNumbers = Mynumbesr.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers);
// Output: [12, 88, 90, 16, 8]

const A_Names = ["ahmed", "fatima", "khalid", "hodan", "aadan", "anwaar"];
const filterA_name = A_Names.filter(
  (name) => name.startsWith("a") || name.startsWith("A")
);

console.log(filterA_name);

const randomNumbers = [
  87, 12, 45, 3, 98, 27, 64, 19, 50, 73, 6, 33, 92, 21, 59, 81, 40, 14, 76, 55,
  1, 68, 30, 99, 7, 44, 23, 90, 36, 11,
];

const GetNumbers = randomNumbers.filter((Number) => {
  return Number >= 30;
});

console.log(GetNumbers);
// Output : [87, 45, 98, 64, 50, 73, 33, 92, 59, 81, 40, 76, 55, 68, 30, 99, 44, 90, 36]

const randomNames = [
  "Ayaan",
  "Khalid",
  "Layla",
  "Mohamed",
  "Fatima",
  "Hassan",
  "Nimco",
  "Ibrahim",
  "Zahra",
  "Salman",
  "Abdirahman",
  "Saida",
  "Mahad",
  "Deqa",
  "Rashid",
  "Hamza",
  "Yasmin",
  "Faisal",
  "Nasra",
  "Ali",
  "Hibo",
  "Abdullahi",
  "Sumaya",
  "Omar",
  "Muna",
];
let SearchName = "Deqa";
let getname = randomNames.filter((name) => {
  return name === SearchName;
});

console.log(getname);

let xaraf = "s";
let getmname = randomNames.filter((name) => {
  return (
    name.startsWith(xaraf.toUpperCase()) || name.startsWith(xaraf.toLowerCase())
  );
});

console.log(getmname); // OutPut: ['Salman', 'Saida', 'Sumaya']

const afarxaraf = randomNames.map((name) => {
  return name.length > 8;
});

console.log(afarxaraf);

const mapnames = randomNames.map((name) => {
  return name.slice(0, 1).toLowerCase();
});

console.log(mapnames);

const filternames = randomNames.filter((name) => {
  return name.slice(0, 1).toLowerCase();
});

console.log(filternames);

let Prices = [10, 20, 30];

const Total = Prices.reduce(function (acc, el, index, array) {
  console.log(`acc waa ${acc}`);
  console.log(`Elementiga Hada waa ${el}`);
  console.log(`Index-ka  ${index}`);
  console.log(`Arrayga ${array}`);
  console.log(`${acc + el}`);
  return acc + el;
}, 5);

console.log(Total);

const words = ["apple", "banana", "strawberry", "kiwi", "blueberry"];

const longestWord = words.reduce(function (acc, word) {
  return word.length > acc.length ? word : acc;
});

console.log(longestWord); // Output: "strawberry"

const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});

const numberss = [10, 20, 30];

numberss.forEach(function (number, index) {
  console.log("Index " + index + ": " + number);
});

const nums = [1, 2, 3];

nums.forEach(function (number, index, array) {
  array[index] = number * 2;
});

console.log(nums);
