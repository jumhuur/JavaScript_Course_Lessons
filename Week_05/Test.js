// switch cases
const day = 5;
switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Maanta waa Maalin Shaqo");
    break;
  case 7:
  case 6:
    console.log("Maanta iska naso");
}

const Students = ["Cali", "Maxamad", "Warfaa"];
let colors = ["red", "Green", "Blue", ["#ffff00", "00ffff", "0000ff"]];
let Hexcodes = ["#ffff00", "00ffff", "0000ff"];
var days = [1, 2, 3, 4, 5, 6, 7];

Students[1] = "shaafici";
//Students[6] = "Jimcaale";
// Students[10] = "salaan";
// console.log(Students);
const NewStudents = (Students[Students.length] = "saamix");
// console.log(Students);

console.log(Students);
if (Students.length > 5) {
  console.log("Liiska ardayd wuu buuxaa  !");
} else if (Students.length >= 3) {
  console.log(`Hore isku diwaan gali waxaa Hadhay ${5 - Students.length} Boos`);
}

// concat
const NewSudents = ["salim", "Ciise", "Liibaan", "carafaad"];
const AllColors = Hexcodes.concat("#ff00ff");
console.log(AllColors);

// join
const list = ["Cali", "Maxamad", "Warfaa"];
console.log(list.join()); // Cali,Maxamad,Warfaa
console.log(list.join("")); // CaliMaxamadWarfaa
console.log(list.join("-")); // Cali-Maxamad-Warfaa
console.log(list.join("@")); // Cali@Maxamad@Warfaa
// push()
Students.push("liibaan");
Students.push("Mukhtaar");
Students.push("taysiir");

// unshift()
Students.unshift("cabdirxamaan", "cabdimaalik");
console.log(Students);

// shift()

Students.shift();
console.log(Students);
console.log(Students.shift());

// pop()
Students.pop();
console.log(Students.pop());
console.log(Students);

// indexof()
const Arday = ["xaliimo", "salma", "nasriin", "nafiisa", "sihaam", "salma"];
console.log(Arday.indexOf("nasriin"));
console.log(Arday.indexOf("salma"));

const Check =
  Arday.indexOf("salma") === -1
    ? "Araygan aad Raadinaysa kuma jirro Liiska"
    : `Ardaygan waxaad ka eegtaa meesha ${Arday.indexOf("salma")}`;
console.log(Check);

// lastindexOf()
console.log(Arday.lastIndexOf("salma"));

const Ids = ["G125C", "G225A", "G325C", "G325C", "G325B", "G125B"];
console.log(Ids.includes("G125C")); // true
console.log(Ids.includes("G125G")); // false

const searchValue = "";
if (searchValue.length > 0) {
  if (Ids.includes(searchValue.toString()) === true) {
    console.log(`Id-gaag waa sax waxaanad kamid tahay Martida xafladan`);
  } else if (Ids.includes(searchValue.toString()) === false) {
    console.log(`waan ka xumahay Id-gan ${searchValue} Maaha sax`);
  } else {
    console.log("Maan aqoonsan id-gaaga");
  }
} else {
  console.log("Fadlan Qor Id-gaaga");
}

let fruits = ["Apple", "Banana", "Mango", "Orange"];
let slicedFruits = fruits.slice(1, 3);
let myfruits = fruits.slice(-3, -2);
console.log(slicedFruits);
console.log(myfruits);
console.log(fruits);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const Jarid = numbers.splice(2, 4, 9);
console.log(Jarid);
console.log(numbers);

const Myarray = [
  "a",
  "b",
  "1",
  "3",
  "66",
  66,
  "Xaamud",
  "c",
  "A",
  "B",
  "C",
  "xamda",
];

console.log(Myarray);
console.log(Myarray.reverse());
console.log(Myarray.sort());
