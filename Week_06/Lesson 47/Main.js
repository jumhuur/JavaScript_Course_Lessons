const bigNums = [10, 20, 30];
const smallnums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < bigNums.length; i++) {
  console.log(bigNums[i]);
  for (let x = 0; x < smallnums.length; x++) {
    console.log(smallnums[x]);
  }
}

// Array of car brands
let carBrands = ["Toyota", "Honda", "Ford", "BMW", "Mercedes"];
// Array of car models
let carModels = ["2000", "20004", "2008", "2010", "2015", "2020", "2023"];

for (let i = 0; i < carBrands.length; i++) {
  console.log(`- ${carBrands[i]}`);
  for (let m = 0; m < carModels.length; m++) {
    console.log(`--- Model: ${carModels[m]}`);
  }

  console.log("*".repeat(40));
}
