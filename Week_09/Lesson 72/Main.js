// examples
const randomNumbers = [
  87, 12, 45, 3, 98, 27, 64, 19, 50, 73, 6, 33, 92, 21, 59, 81, 40, 14, 76, 55,
  1, 68, 30, 99, 7, 44, 23, 90, 36, 11,
];

const numbers = randomNumbers.filter(function (num) {
  return num >= 30;
});

console.log(numbers);

// examples
const numbers1 = randomNumbers.filter(function (num) {
  return num < 30;
});

console.log(numbers1);

let searchname = "Fatima";
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

const names = randomNames.filter(function (name) {
  return name === searchname;
});

console.log(names);

let xaraf = "A";
const names_array = randomNames.filter((name) => {
  return (
    name.startsWith(xaraf.toLowerCase()) || name.startsWith(xaraf.toUpperCase())
  );
});

console.log(names_array);
