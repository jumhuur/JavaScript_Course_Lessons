// Main.js
import {
  getdata as githubdata,
  add as iskugayn,
  iskuqaybin as Qaybin,
} from "./functions.js";
console.log(iskugayn(20, 30));
console.log(Qaybin(50, 20));
//console.log(taysiir(20, 10));
// Tusaale 1aad Array
const array_data = ["jimcaale", "muuse", "wahiib"];
const displaydata = (Data) => {
  let [name1, name2, name3] = Data;
  console.log(`welcome ${name1} and ${name2} and ${name3}`);
};

displaydata(array_data); // welcome jimcaale and muuse and wahiib

// Tusaale 2 object
const Object_data = { name: "jimcaale", age: "23", job: "web dev" };
const Userdata = (Data) => {
  let { name, age, job } = Data;
  return `Welcome ${name} , Your Job is ${job} and Your age is ${age}`;
};

console.log(Userdata(Object_data)); // Welcome jimcaale , Your Job is web dev and Your age is 23

// spread
const qoraal = "Taysiir";
console.log(qoraal);
console.log(...qoraal);
console.log([...qoraal]);

const fruits1 = ["tufaax", "moos"];
const fruits2 = ["canab", "liin"];

const allFruits = [...fruits1, ...fruits2];
console.log(allFruits); // ['tufaax', 'moos', 'canab', 'liin']

const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // [1, 2, 3]

const numbers = [3, 5, 7];
console.log(Math.min(...numbers)); // 7

const students = [
  {
    name: "Ahmed Ali",
    age: 20,
    studentId: "ST001",
    grade: "Grade 12",
  },
  {
    name: "Zahra Hassan",
    age: 19,
    studentId: "ST002",
    grade: "Grade 11",
  },
  {
    name: "Khalid Mohamed",
    age: 21,
    studentId: "ST003",
    grade: "Grade 12",
  },
  {
    name: "Ayaan Yusuf",
    age: 18,
    studentId: "ST004",
    grade: "Grade 10",
  },
  {
    name: "Fatima Abdullahi",
    age: 22,
    studentId: "ST005",
    grade: "Grade 13",
  },
];

function* gendata(list) {
  for (let strudent of list) {
    yield strudent;
  }
}

let gennum = gendata(students);
console.log(gennum.next());
console.log(gennum.next());
console.log(gennum.next());
console.log(gennum.next());
console.log(gennum.next());

githubdata("sharafdin");
const list = [
  "saalim",
  "cali",
  "sucuud",
  "ilahaan",
  ["muuse", "nasri", ["yuusuf", "muwaahib"], "safwaan"],
  "mukhtaar",
];

console.log(list);

// des
let [, , , , [, , [, name]]] = list;
let [, , , , nastedlist] = list;
let [, , , , [, , arry3]] = list;
let [, , , , , last] = list;
console.log(name);
console.log(nastedlist);
console.log(arry3);
console.log(last);

const qof = {
  magaca: "Axmed",
  dada: 25,
  cinwaan: {
    magaalada: "Hargeysa",
    dalka: "Somaliland",
  },
};

let {
  magaca,
  cinwaan: { magaalada, dalka },
} = qof;

console.log(magaca);
console.log(magaalada);
console.log(dalka);
