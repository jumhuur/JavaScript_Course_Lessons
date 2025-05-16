// nested array
const list = [
  "saalim",
  "cali",
  "sucuud",
  "ilahaan",
  ["muuse", "nasri", ["yuusuf", "muwaahib"], "safwaan"],
  "mukhtaar",
];

let [name1, name2, name3, name4, [name5, name6, [name7, name8], name9]] = list;
console.log(name1);
console.log(name2);
console.log(name4);
console.log(name5);
console.log(name6);
console.log(name7);
console.log(name8);
console.log(name9);
