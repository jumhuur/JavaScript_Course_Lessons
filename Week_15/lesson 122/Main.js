// JSON.stringify() &  JSON.parse()
// string json ?

// array
// object

let list = ["nuura", "Muwaahib", "shukri", "naciima"];

const qof = {
  magac: "Maxamed",
  da: 25,
  arday: true,
};

console.log(list);
console.log(qof);

console.log(typeof list);
console.log(typeof qof);

const arry_to_string = JSON.stringify(list);
const object_to_string = JSON.stringify(qof);

console.log(arry_to_string);
console.log(object_to_string);

console.log(typeof arry_to_string);
console.log(typeof object_to_string);

const str_array = JSON.parse(arry_to_string);
const str_object = JSON.parse(object_to_string);
console.log(str_array);
console.log(str_object);
