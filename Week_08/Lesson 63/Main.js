//Arrow Functions – Part 2
let Print = function (Name) {
  return `Welcome : ${Name}`;
};
console.log(Print("Muxsin"));
// function Print(Name) {
//   return `Welcome : ${Name}`;
// }

// QAABKA 1AAD
let Print1 = (Name, lastname) => {
  return `Welcome: ${Name} ${lastname}`;
};

console.log(Print1("MUUSE", "cabdi"));

// QAABKA 2AAD
let Print2 = (Name, lastname) => `Welcome : ${Name} ${lastname}`;
console.log(Print2("Muslix", "maxmad"));
// QAABKA 3AAD
let Print3 = Name => `Welcome : ${Name}`;
console.log(Print3("Jumhuur"))

  
