const list = [
  "saalim",
  "cali",
  "sucuud",
  "ilahaan",
  ["muuse", "nasri", ["yuusuf", "muwaahib"], "safwaan"],
  "mukhtaar",
];

let [, , , , [, name1]] = list;
let [, , , , [, , array]] = list;
let [, , , , , sf] = list;
let [, , , , [, , , sfa]] = list;

console.log(name1);
console.log(array);
console.log(sf);
console.log(sfa);
