const Students = ["muna", "khaalid", "Cimraan", "sacad", "Daahir"];
// console.log(Students[0]);
// console.log(Students[1]);
// console.log(Students[2]);
// console.log(Students[3]);
// console.log(Students[4]);

for (let i = 0; i < 5; i++) {
  console.log(Students[i]);
}

const Xarfo = ["A", "B", "C", "D"];
// console.log(Xarfo[0]);
// console.log(Xarfo[1]);
// console.log(Xarfo[2]);
// console.log(Xarfo[3]);

for (let i = 0; i < 4; i++) {
  // code
  console.log(Xarfo[i]);
  //console.log(i);
}

// dynamic array loop using length
for (let x = 0; x < Students.length; x++) {
  //code
  console.log(`--- ${Students[x]}`);
}
