// Exercise 20
console.log("--------Exercie 20--------");
const Numbers = [];
for (let i = 0; i <= 14; i++) {
  Numbers.push(i + 1);
  console.log(Numbers[i]);
}

// Exercise 21
console.log("--------Exercie 21--------");
const Mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let i = 0; i < Mynumbers.length; i++) {
  const Result = Mynumbers[i] + Mynumbers[i + 1];
  console.log(Result);
}

// Exercise 22
console.log("--------Exercie 22--------");
const names = [
  "ahmed",
  "fatima",
  "KHALID",
  "hodan",
  "MARYAM",
  "yusuf",
  "AMINA",
  "abdirahman",
  "NIMCO",
  "HASSAN",
  "layla",
  "ABDULLAHI",
  "amina",
  "FAISAL",
  "KARIM",
  "ali",
  "ZAHRA",
  "MOHAMED",
  "saida",
  "HAMZA",
  "ilyas",
  "SALMA",
  "mohamud",
  "NAJMA",
  "RASHID",
  "abdul",
  "FARAH",
  "DEQA",
  "salman",
  "KHADIJA",
  "yasin",
  "MAHAD",
  "HIBO",
  "OMAR",
  "HUSNA",
];

for (let i = 0; i < names.length; i++) {
  if (names[i] !== names[i].toUpperCase()) {
    continue;
  }
  console.log(names[i]);
}

// Exercise 23
console.log("--------Exercie 23--------");
const Xarfo = ["A", "M", "K", "S"];
mainloop: for (let i = 0; i < names.length; i++) {
  for (let x = 0; x < Xarfo.length; x++) {
    if (names[i].startsWith(Xarfo[x].toUpperCase())) {
      continue mainloop;
    }

    if (names[i].startsWith(Xarfo[x].toLowerCase())) {
      continue mainloop;
    }
  }
  console.log(names[i]);
}

// Exercise 24
const StudentsList = [
  "ahmed",
  "fatima",
  "KHALID",
  "hodan",
  "MARYAM",
  "yusuf",
  "AMINA",
  "abdirahman",
  "NIMCO",
  "HASSAN",
  "layla",
  "ABDULLAHI",
  "amina",
  "FAISAL",
  "KARIM",
  "ali",
  "ZAHRA",
  "MOHAMED",
  "saida",
  "HAMZA",
  "ilyas",
  "SALMA",
  "mohamud",
  "NAJMA",
  "RASHID",
  "abdul",
  "FARAH",
  "DEQA",
  "salman",
  "KHADIJA",
  "yasin",
  "MAHAD",
  "HIBO",
  "OMAR",
  "HUSNA",
];
console.log("--------Exercie 24--------");
for (let i = 0; i < StudentsList.length; i++) {
  if (StudentsList[i] === StudentsList[i].toUpperCase()) {
    continue;
  } else if (StudentsList[i] === StudentsList[i].toLowerCase()) {
    StudentsList[i].toUpperCase();
  }
  console.log(StudentsList[i]);
}

// Exercise 25
console.log("--------Exercie 25--------");
for (let i = 0; i < carBrands.length; i++) {
  console.log(carBrands[i].split("").reverse().join(""));
}
