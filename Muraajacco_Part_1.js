// {}

// []

// ()

// ;

// :

// ,

// .

// =

// =>

//``

// line kaliya

/*
 askjdhsajkdhsa
 asdsadasdas
*/

// log
console.log("js");
// info
console.info("js");
// error
console.error("js");

// warn
console.warn("js");

// var
var namevar = "var"; // string
console.log(namevar);

// let
let nameLet = "let";
console.log(nameLet);

let isticmaal;
isticmaal = 20;
console.log(isticmaal);

// const
const adeegsi = 10;
//adeegsi = 30;
console.log(adeegsi);
const nameconst = "const";
console.log(nameconst);

const userName = "cali";
const user_name = "cali";

const user = "12";

//const @age = "" error
// let 1user =  {} error

// string
let studentName = "maxamad cali cismaan";
let student_name = "cali cismaan";

// number
let myprice = 12;
const total = 13.9;

// undefined
let name;

// null
const data = null;
// array
const numbers = [12, 34, 56, 67, 90];

// object
const userinfo = {
  name: "",
};

//  function

// +
console.log(10 + 90);
console.log(10 + "40");
let name1 = "ali";
let name2 = "xasan";
//console.log(name1 + name2);
// -
console.log(90 - 10);
// *
console.log(10 * 2);
// /
console.log(10 / 2);

// %

console.log(10 % 3); // 1

// **
console.log(2 ** 3); // 8

// ++
let num = 10;
num++;
console.log(num);
num++;
console.log(num);
// --
let days = 10;
days--;
days--;
days--;
days--;
days--;
days--;
days--;
days--;
console.log(days); // 8

// ==  value
// === value + data type

let a = 10;
let b = 15;
console.log(a == b);
let c = "10";
let d = "10";
console.log(c == d);

let x = "10";
let y = 10;
console.log(x == y);

const p = 10;
const u = 10;
console.log(p === u);

const n = 10; // number
const k = "10"; // string
console.log(n === k); //

// !=  value
// !== value + data type
console.log(a != b); // false

const Price = 12;
const TOTAL = 13;
console.log(Price !== TOTAL);
const Price1 = "12";
const TOTAL1 = 13;
console.log(Price1 !== TOTAL1); // true

const Price2 = "10";
const TOTAL2 = 10;
console.log(Price2 !== TOTAL2); // true

// >
// <
// >=
//<=

let r = 87;
let q = 90;
console.log(r > q); // false
console.log(11 > 3); // true

console.log(10 < 90); // true
console.log(23 < 23); // false

console.log(23 >= 23); // true

console.log(45 <= 50); // true

// && and
const userage = 22;
const Userid = false;
console.log("and", userage >= 22 && Userid); // false

// || or
console.log("or", userage >= 22 || Userid); // true
console.log(`or: ${userage >= 22 || Userid}`);

// !

const isBook = false;
const isPen = true;
console.log(!isBook); // true
console.log(!isPen); // false

// +
console.log("xasan" + "cabdi"); // xasancabdi
console.log("xasan" + " " + "cabdi"); // xasan cabdi

const msg = "waxaan baranayaa js";
console.log(msg + "iyo Php");

// replace()
const msg2 = "waxaan baranayaa js iyo python wayao js waa luuqad muhiima";
console.log(msg2);
console.log(msg2.replaceAll("js", "Css"));

const nameis = "xasan";
console.log(`soo dhawaaw ${nameis}`);

const n1 = 23;
const n2 = 33;
console.log(`Isku gaynta labada tiro waa ${n1 + n2}`);

const myprices = 190;
const myNameIS = "MAXAMAD";
const itmes = ["buug", "qalin", "samuurad"];
const Null = null;
const ramaadaan = true;
console.log(typeof myprices);
console.log(typeof myNameIS);
console.log(typeof itmes);
console.log(Array.isArray(itmes)); // true
console.log(typeof Null);
console.log(typeof ramaadaan);

// toString
const nn = 10;
console.log("number", typeof nn);
//console.log(nn.toString());
console.log("string", typeof nn.toString());

// tofixed
const float = 90.867434847847238327;
console.log(float.toFixed(1)); // 90.9
console.log(float.toFixed(2)); // 90.87
console.log(float.toFixed(5));

// parseInt
let str = "123.45";
console.log(str);
console.log(parseInt(str));
// parseFloat
console.log(parseFloat(str));
// Number
console.log("number", Number(str));

//isNaN
console.log(isNaN(12)); // false
console.log(isNaN("ABC")); // TRUE

// Math | roud() floor()  ceil()  trunc() pow() min() max()  random()

const n_number = 4.1;
const floor_num = 4.9;
const round_num = 4.4;
console.log(Math.ceil(n_number)); // 5
console.log(Math.floor(floor_num)); //
console.log(Math.round(round_num)); //

const trunc_num = 89.45;
console.log(Math.trunc(trunc_num)); // 98
console.log(Math.pow(2, 3));
console.log(Math.min(34, 55, 89)); // 34
console.log(Math.max(34, 55, 89)); // 89
console.log(Math.random()); // 0.9969364391760998

// string methods
// index == meesha uu yaalo xaraf kastaa waxa uu ka bilaabmaa 0
const mystring = "cali waa arday wanaagsan";
console.log(mystring[3]); // i
console.log(mystring[2]); // l
console.log(mystring[1]); // a
console.log(mystring[0]); // c

// charAt
console.log(mystring.charAt(2)); // l
// length
console.log(mystring.length); // 4
// toUppercase
console.log(mystring.toUpperCase());
// toLowetcase
console.log(mystring.toLowerCase());

// includes(string)
console.log(mystring.includes("arday")); // true
console.log(mystring.includes("js")); // false

// indexof
console.log(mystring.indexOf("w"));
// lastIndexof
console.log(mystring.lastIndexOf("w"));

// starsWith
console.log(mystring.startsWith("r")); // false
console.log(mystring.startsWith("c")); // true
console.log(mystring.startsWith("C")); // false

// endsWith
console.log(mystring.endsWith("r")); // false
console.log(mystring.endsWith("n")); // true
console.log(mystring.endsWith("C")); // false

// slice
console.log(mystring.slice(0, 14));
console.log(mystring.slice(15, 25));

// substring
console.log(mystring.substring(0, 14));
console.log(mystring.substring(15, 25));

// substr
console.log(mystring.substr(0, 14));

// trim()
const mytrim = "      cali       ";
console.log(mytrim);
console.log(mytrim.trim());

// split()
const strings = "jumhuur waa arday";
console.log(strings.split("@"));
// concat
console.log(mytrim.concat(strings));
console.log("$".repeat(1));

var Result = console.log(mytrim.trim().concat(strings).split("").length);

console.log("@".repeat(15));
const con_numb = 10;
if (con_numb == 10) {
  console.log("wuu ka wayn yahay");
  if (con_numb >= 5) {
    console.log(con_numb);
  }
} else if (con_numb == 20) {
  console.log("waa 20");
} else {
  console.log("midna lamid maaha");
}
