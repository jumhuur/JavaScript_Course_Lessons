// Gaar  23aad
const Numbers = [
  12, 5, 19, 7, 14, 3, 10, 16, 8, 1, 20, 11, 4, 15, 2, 18, 6, 9, 17, 13,
];
const Hotnumbers = [4, 2, 6];
mainloop: for (let i = 0; i < Numbers.length; i++) {
  for (let x = 0; x < Hotnumbers.length; x++) {
    if (Numbers[i] * Hotnumbers[x] > 40) {
      continue mainloop;
    }
  }
  console.log(Numbers[i]);
}

// Gaar 21
console.log("---exercise 21 ------");
const Mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let i = 0; i < Mynumbers.length; i++) {
  const Result = Mynumbers[i] + Mynumbers[i + 1];
  if (Mynumbers[i + 1] > Mynumbers.length - 1) {
    break;
  }
  console.log(Result);
}

//3

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

for (let i = 0; i < carBrands.length; i++) {
  let reversedName = carBrands[i].split("");
  console.log(`---${carBrands[i]}---`);
  for (let x = 0; x < reversedName.length; x++) {
    console.log(reversedName[x]);
  }
}

// ---Toyota---
//  T
//  o
//  y
//  o
//  t
//  a
// ---Honda---
//  H
//  o
//  n
//  d
//  a
// ---Ford---
//  F
//  o
//  r
//  d
// ---Tesla---
//  T
//  e
//  s
//  l
//  a
// ---Chevrolet---
//  C
//  h
//  e
//  v
//  r
//  o
//  l
//  e
//  t
// ---BMW---
//  B
//  M
//  W
// ---Mercedes-Benz---
//  M
//  e
//  r
//  c
//  e
//  d
//  e
//  s
//  -
//  B
//  e
//  n
//  z
// ---Audi---
//  A
//  u
//  d
//  i
// ---Lexus---
//  L
//  e
//  x
//  u
//  s
