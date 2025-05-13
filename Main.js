// Main.js
import * as all from "/functions.js";
console.log(all.add(20, 22));
console.log(all.iskuqaybin(90, 3));
//console.log(all.getdata("sharafdin"));

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

let StudentsData = [
  {
    magac: "Axmed Ali",
    da: 21,
    fasal: "IT",
    guursaday: false,
    xiisaha: ["coding", "football"],
    luqadaha: ["Somali", "English"],
    cinwaan: {
      magaalo: "Hargeisa",
      xaafad: "Ibrahim Koodbuur",
    },
  },
  {
    magac: "Zahra Omar",
    da: 19,
    fasal: "Medicine",
    guursaday: false,
    xiisaha: ["reading", "drawing", "swimming"],
    luqadaha: ["Arabic", "English", "Somali"],
    cinwaan: {
      magaalo: "Mogadishu",
      xaafad: "Hodan",
    },
    buuxisayKoorsada: true,
  },
  {
    magac: "Khalid Yusuf",
    da: 24,
    fasal: "Engineering",
    guursaday: true,
    caruur: 2,
    xiisaha: [],
    luqadaha: ["English"],
    cinwaan: {
      magaalo: "Bosaso",
      xaafad: "Roodhi",
    },
  },
  {
    magac: "Nasra Hassan",
    da: 22,
    fasal: "Computer Science",
    guursaday: false,
    xiisaha: ["gaming", "hiking"],
    luqadaha: [],
    cinwaan: {
      magaalo: "Garowe",
      xaafad: "Hantiwadaag",
    },
    buuxisayKoorsada: null,
  },
  {
    magac: "Yusuf Mohamed",
    da: 20,
    fasal: "Business",
    guursaday: false,
    xiisaha: ["marketing", "networking"],
    luqadaha: ["English", "French"],
    cinwaan: {
      magaalo: "Kismayo",
      xaafad: "Shaqalaha",
    },
  },
  {
    magac: "Ayaan Abdi",
    da: 18,
    fasal: "Law",
    guursaday: false,
    xiisaha: ["debate", "writing"],
    luqadaha: ["Somali"],
    cinwaan: {
      magaalo: "Baidoa",
      xaafad: "Wadajir",
    },
  },
  {
    magac: "Hamza Abdirahman",
    da: 25,
    fasal: "Pharmacy",
    guursaday: true,
    caruur: 1,
    xiisaha: ["research"],
    luqadaha: ["English", "Italian"],
    cinwaan: {
      magaalo: "Berbera",
      xaafad: "Haramcad",
    },
  },
  {
    magac: "Hodan Farah",
    da: 23,
    fasal: "Nursing",
    guursaday: false,
    xiisaha: ["volunteering", "cooking"],
    luqadaha: ["Somali", "English"],
    cinwaan: {
      magaalo: "Jowhar",
      xaafad: "Balcad",
    },
  },
  {
    magac: "Ismail Noor",
    da: 27,
    fasal: "Finance",
    guursaday: true,
    caruur: 3,
    xiisaha: ["investing", "reading"],
    luqadaha: ["Somali", "English"],
    cinwaan: {
      magaalo: "Galkayo",
      xaafad: "Garsoor",
    },
  },
  {
    magac: "Fadumo Jama",
    da: 20,
    fasal: "Education",
    guursaday: false,
    xiisaha: ["teaching", "storytelling"],
    luqadaha: ["Somali", "Arabic"],
    cinwaan: {
      magaalo: "Beledweyne",
      xaafad: "Xaawo Taako",
    },
  },
];

all.displayUserdata(StudentsData);

class User {
  static count = 0;
  constructor(id, name, selery) {
    this.i = id;
    this.n = name || "unknown";
    this.s = selery < 5500 ? selery + 100 : selery;
    User.count++;
    this.msg = function () {
      return `soo dhawaaw ${this.n} your selary is ${this.s}`;
    };
  }

  sayhello() {
    return this.s > 6000 ? `Good lucky ! ${this.s}` : `Bad lucky`;
  }

  updateinfo(name) {
    this.n = name;
  }

  static countMembers() {
    return `${this.count} Members`;
  }
}

let user1 = new User(100, "Maxamad", 5400);
let user2 = new User(101, "cismaan", 6400);
let user4 = new User(105, "Muxsin", 7400);
console.log(user1.i);
console.log(user1.n);
user1.updateinfo("Jumhuur");
console.log(user1.n);
console.log(user1.s);
console.log(user1.msg());
console.log(user1.sayhello());
console.log(user1.count);
console.log("*".repeat(45));

console.log(user2.i);
console.log(user2.n);
console.log(user2.s);
console.log(user2.msg());
console.log(user2.sayhello());
console.log("*".repeat(45));
console.log(user4.i);
console.log(user4.n);
console.log(user4.s);
console.log(user4.msg); // native code
console.log(user2.sayhello); // native code

let num1 = 100;
let num2 = new Number(100);

console.log(typeof num1);
console.log(typeof num2);
console.log("*".repeat(45));
console.log(num1 instanceof Number);
console.log(num2 instanceof Number);
console.log("*".repeat(45));
console.log(num1.constructor == Number);
console.log(num2.constructor == Number);

console.log(User.countMembers());
