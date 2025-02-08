console.log("-------for loop-----------");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let x = 0;
for (; x < numbers.length; ) {
  console.log(numbers[x]);
  x = x + 2;
}

// 1
// 3
// 5
// 7
// 9
console.log("-------while loop-----------");

let i = 0;
while (i < numbers.length) {
  let numb = numbers[i];
  i++;
  if (numb === 3) {
    continue;
  }
  console.log(numb);
}

// Exercise 25
const CarCounts = 8;
const carNames = [
  "Toyota Corolla",
  "Honda Civic",
  "Ford Mustang",
  "Tesla Model S",
  "Chevrolet Camaro",
  "BMW X5",
  "Mercedes-Benz C-Class",
  "Audi Q7",
  "Lexus RX",
];

const carBrands = [
  "Toyota",
  "Honda",
  "Ford",
  "Tesla",
  "Chevrolet",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Lexus",
];

const carModes = [
  "Sedan",
  "Sedan",
  "Coupe",
  "Electric Sedan",
  "Coupe",
  "SUV",
  "Sedan",
  "SUV",
  "SUV",
];

const carImages = [
  "https://cdn.pixabay.com/photo/2022/04/24/12/26/car-7153508_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/08/20/15/22/honda-civic-si-6560708_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/11/20/05/27/ford-mustang-6810911_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/12/23/09/18/tesla-6889042_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/10/12/22/39/chevrolet-spark-1736189_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/02/22/20/22/bmw-1216469_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/07/09/21/47/car-1506922_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/03/27/20/01/car-6129512_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/10/02/21/00/auto-969048_1280.jpg",
];
document.write(`<h2>0${CarCounts} Cars in this Page</h2>`);
document.write(`<div class="container">`);
for (let i = 0; i < CarCounts; i++) {
  document.write(`<div class="card">`);
  document.write(`<img src="${carImages[i]}" alt="Car Image" />`);
  document.write(`<div class="card-content">`);
  document.write(
    `<div class="card-title">Car Name: ${i + 1}: ${carNames[i]}</div>`
  );
  document.write(`<div class="card-info">Mode: ${carModes[i]}</div>`);
  document.write(`<div class="card-info">Brand: ${carBrands[i]}</div>`);
  document.write(`</div>`);
  document.write(`</div>`);
}
document.write(`</div>`);
let num = 0;
do {
  console.log(carBrands[num]);
  num++;
} while (num < carBrands.length);

function Salaan(Name) {
  console.log(`Asalaamu Calaykum! ${Name}`);
}

Salaan();

function Iskugayn(n1, n2) {
  console.log(n1 + n2);
}

Iskugayn(25, 25);

function Iskugayn2(n1, n2) {
  return n1 + n2;
}

console.log(Iskugayn2(10, 10));

function GetTotal(...Prices) {
  let Total = 0;
  for (let i = 0; i < Prices.length; i++) {
    Total = Total + Prices[i];
  }
  return `Total-kaaga waa ${Total}$`;
}

console.log(GetTotal(1, 34, 56, 1.67));
//Output: [1, 34, 56, 1.67]

function FullInfo(ClassName, TeacherName, ...Students) {
  let msg = `Macalinka Fasalka ${ClassName} waa ${TeacherName} waxa dhigta Fasalkan `;
  let st = Students.join("|");
  return `${msg} ${st}`;
}

console.log(FullInfo("Jumhuur", "3", "Raashid", "Xamse", "Maxmaad"));

document.write(Welcome("Cismaan", "cali"));
function Welcome(...Names) {
  return `Welcome ${Names.join("|")}`;
}

function Hello() {
  return "Hello";
}

console.log(Hello());

function greet() {
  function sayHello() {
    console.log("Hello, welcome to JavaScript!");
  }
  sayHello();
}
greet();

function fullName(firstName, lastName) {
  function formatName() {
    return firstName + " " + lastName;
  }
  return "Your full name is: " + formatName();
}

console.log(fullName("Hamda", "dahir"));

function counter() {
  let count = 0;
  function increment() {
    count++;
    console.log(`Your count is: ${count}`);
  }
  return increment;
}
let Mycounter = counter();
Mycounter(); // Output: Current count: 1
Mycounter(); // Output: Current count: 2
Mycounter(); // Output: Current count: 3

// let Print = function () {
//   return "Welcome Qaabkii Hore";
// };
// console.log(Print());

// let Print1 = () => {
//   return "Welcome Qaabka 1aad";
// };
// console.log(Print1());

// let Print2 = () => "Welcome Qaabka 2aad";
// console.log(Print2());

// let Print3 = (_) => "Welcome Qaabka 3aad"; // format on save waa inaad joojisaa
// console.log(Print2());

let Print = function (Name) {
  return `Welcome ${Name}`;
};
console.log(Print("Muxsin"));

let Print1 = (Name) => {
  return `Welcome ${Name}`;
};
console.log(Print1("Muxsin"));

let Print2 = (Name) => `Welcome ${Name}`;
console.log(Print2("Muxsin"));

let Print3 = Name => `Welcome ${Name}`; // format on save waa inaad joojisaa
console.log(Print2("Muxsin"));


const  reveredString = (Word) => {
  let ReversedWord = "";
  for(let i = Word.length - 1; i >= 0; i--){
    ReversedWord = `${ReversedWord}${Word[i]}`
  }

  return ReversedWord
}
console.log(reveredString("cali"))
console.log(reveredString("hadiya"))
console.log(reveredString("hinda"))
console.log(reveredString("aamina"))

//Output: ilac
//Output: ayidah
//Output: Maiadnih
//Output: animaa





const calculator = (Calaamad) => {
  const Calc = (n1,n2) => {
    if(Calaamad === "+"){
      return n1+n2
    } else if(Calaamad === "-"){
      return n1 - n2
    } else if (Calaamad === "*"){
      return n1 * n2
    } else if(Calaamad === "/"){
      return n1 !== 0 ? n1 / n2 : "Sero waxba looma qaybin karro"
    } else {
      return "Invalid operation"
    }
  }
  return Calc
} 

// ISKUGAYN
const C1 = calculator("+")
console.log(C1(90.23, 54.76)) // Output: 144.99

// KA JAR
const C2 = calculator("-")
console.log(C2(10,5)) // Output: 5

// ISKU DHUFASHO
const C3 = calculator("*")
console.log(C3(3,5)) // Output: 15

// ISKU QAYBIN
const C4 = calculator("/")
console.log(C4(90,34)) // Output: 2.6470588235294117  


// Error Testing
const C5 = calculator("AA")
console.log(C5(15,2)) // Output:  Invalid operation


function WordCheck(Word = "Madam"){
  function Reversing(Str){
    let Reversed = "";
    for(let i = Str.length - 1; i >= 0; i--){
      Reversed =  `${Reversed}${Str[i]}`
    }
    return Reversed
  }

  return Word.toLowerCase() === Reversing(Word.toLowerCase())
}

console.log(WordCheck("CALI"))

// var a = 5
// let b = 10
// function Scope(){
//   var a = 20
//   let b = 30
//   return `From local scopre ${a} and ${b}`
// }

// console.log(Scope())
// console.log(`from globle Scope ${a} and ${b}`)

var a = 50
let b = 60
const c = 80
if(true){
  var a = 20
  let b = 30
  const c = 40
  console.log(`from if Scope ${a} and ${b} and ${c}`)
}

console.log(`from Global Scope ${a} and ${b} and ${c}`)



function parent(){
  let Price = 14 
  function Child(){
    function Child1(){
       return `Total: ${Price - 3}`
    }
   return Child1()
  }
  return Child()
}

console.log(parent()) // Output: Total: 11