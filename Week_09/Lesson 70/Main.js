// examples
const UsersName = ["ahmed Ali", "fARAH Omar", "hassan Abdi"];
let formatnames = UsersName.map(function format(name) {
  return `${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`;
});

console.log(formatnames);

// example
const numbers = [23, 62, 93, 4, 5, 66, 47, 18, 29, 105];
let module = numbers.map((num) => {
  return num % 2;
});

console.log(module);

const username = ["ahmed", "fatima", "khalid", "hodan"];
let format = username.map((name) => {
  return `@${name}`;
});

console.log(format);
