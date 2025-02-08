// Map()
let numbers = [1, 2, 3, 4, 5];

let mapnum = numbers.map(function (el, index, array) {
  //   console.log(`elements : ${element}`);
  //   console.log(`element index is : ${index}`);
  //   console.log(array);
  return el + el;
});

console.log(mapnum);

for (let i = 0; i < mapnum.length; i++) {
  console.log(mapnum[i]);
}

const names = ["ahmed", "fatima", "khalid", "hodan"];

let formatnames = names.map(function (name) {
  return name.toUpperCase();
});

console.log(names);
console.log(formatnames);
