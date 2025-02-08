// slice
let fruits = ["Apple", "Banana", "Mango", "Orange", "ccsds"];
console.log(fruits.slice(0, 2)); //
console.log(fruits.slice(3));
console.log(fruits.slice(-4, -3)); // Banana
console.log(fruits.slice(-5, -2));
console.log(fruits);

//splice
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`Inata la jaray : ${numbers.splice(1, 4)}`);
console.log(`Arraygii hore: ${numbers}`);

const id = ["092", "34", "565", "989", "345", "146"];
console.log(id);
const Intalajaray = id.splice(0, 4, "Nimcaan");
console.log(Intalajaray);
console.log(id);
