// loop
// const Students = ["muna", "khaalid", "Cimraan", "sacad", "Daahir"];
// console.log(`Welcome : ${Students[0]}`);
// console.log(`Welcome : ${Students[1]}`);
// console.log(`Welcome : ${Students[2]}`);
// console.log(`Welcome : ${Students[3]}`);
// console.log(`Welcome : ${Students[4]}`);
// // Welcome : muna
// // Welcome : khaalid
// // Welcome : Cimraan
// // Welcome : sacad
// // Welcome : Daahir

// const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(i);
// }

const StudentsWithid = [
  "muna",
  1,
  "khaalid",
  2,
  "Cimraan",
  3,
  "sacad",
  4,
  "Daahir",
  5,
];

// console.log(StudentsWithid);
// if (typeof StudentsWithid[0] === "string") {
//   console.log(StudentsWithid[0]);
// }
// if (typeof StudentsWithid[1] === "string") {
//   console.log(StudentsWithid[1]);
// }
// if (typeof StudentsWithid[2] === "string") {
//   console.log(StudentsWithid[2]);
// }
// if (typeof StudentsWithid[3] === "string") {
//   console.log(StudentsWithid[3]);
// }
// if (typeof StudentsWithid[4] === "string") {
//   console.log(StudentsWithid[4]);
// }
// if (typeof StudentsWithid[5] === "string") {
//   console.log(StudentsWithid[5]);
// }
// if (typeof StudentsWithid[6] === "string") {
//   console.log(StudentsWithid[6]);
// }
// if (typeof StudentsWithid[7] === "string") {
//   console.log(StudentsWithid[7]);
// }
// if (typeof StudentsWithid[8] === "string") {
//   console.log(StudentsWithid[8]);
// }
// if (typeof StudentsWithid[9] === "string") {
//   console.log(StudentsWithid[9]);
// }

// for (let i = 0; i < StudentsWithid.length; i++) {
//   if (typeof StudentsWithid[i] === "string") {
//     console.log(StudentsWithid[i]);
//   }
// }

// // hadaan rabo kaliya lanbarada waxaan samaynaya sidan hoose

// for (let i = 0; i < StudentsWithid.length; i++) {
//   if (typeof StudentsWithid[i] === "number") {
//     console.log(`Id is ${StudentsWithid[i]}`);
//   }
// }

// const Mynumbers = [
//   23, 45, 67, 12, 89, 34, 56, 78, 90, 12, 45, 67, 89, 34, 56, 78, 90, 11, 22,
//   33, 44, 55, 66, 77, 88,
// ];
// for (let i = 0; i < Mynumbers.length; i++) {
//   if (Mynumbers[i] % 2 === 0) {
//     console.log(Mynumbers[i]);
//   }
// }

// console.log("#".repeat(40));

// for (let i = 0; i < Mynumbers.length; i++) {
//   if (Mynumbers[i] % 2 !== 0) {
//     console.log(Mynumbers[i]);
//   }
// }

// Array of car brands
// let carBrands = ["Toyota", "Honda", "Ford", "BMW", "Mercedes"];

// // Array of car models
// let carModels = ["2000", "2004", "2008", "2010", "2015", "2020", "2023"];

// for (let i = 0; i < carBrands.length; i++) {
//   console.log(carBrands[i]);
//   for (let x = 0; x < carModels.length; x++) {
//     console.log(carModels[x]);
//   }
// }

// Toyota
//  - Models : 2000
//  - Models : 2004
//  - Models : 2008
//  - Models : 2010
//  - Models : 2015
//  - Models : 2020
//  - Models : 2023

// document.write(`<h1> salaam </h1>`);

// Array of flower names
let flowers = ["Rose", "Tulip", "Sunflower", "Daisy", "Orchid"];

// Array of sizes for each flower
let flowerSizes = [
  ["Small", "Medium", "Large"], // Rose sizes
  ["Small", "Medium"], // Tulip sizes
  ["Large", "Extra Large"], // Sunflower sizes
  ["Small", "Medium"], // Daisy sizes
  ["Medium", "Large", "Extra Large"], // Orchid sizes
];

// Array of hex color codes for each flower
let flowerColors = [
  ["#FF0000", "#FFC0CB"], // Rose colors (red, pink)
  ["#FF6347", "#FFD700"], // Tulip colors (tomato, gold)
  ["#FFD700", "#FFA500"], // Sunflower colors (gold, orange)
  ["#215f3b", "#FFFAF0"], // Daisy colors (white, floral white)
  ["#DA70D6", "#9932CC"], // Orchid colors (orchid, dark orchid)
];

let flowerImages = [
  "https://cdn.pixabay.com/photo/2022/11/19/10/03/rose-7601741_1280.jpg", // Rose
  "https://cdn.pixabay.com/photo/2022/04/09/05/23/tulip-7120784_1280.jpg", // Tulip
  "https://cdn.pixabay.com/photo/2021/08/15/06/54/sunflower-6546993_1280.jpg", // Sunflower
  "https://cdn.pixabay.com/photo/2023/07/14/10/50/flower-8126748_1280.jpg", // Daisy
  "https://cdn.pixabay.com/photo/2022/02/08/16/28/flower-7001678_1280.jpg", // Orchid
];

document.write(`<div class="cards">`);
for (let i = 0; i < flowers.length; i++) {
  console.log(`${flowers[i]}`);
  const indexes = flowers.indexOf(flowers[i]);
  console.log(indexes);
  // // images
  console.log(`${flowerImages[indexes]}`);

  document.write(` <div class="card">`);
  document.write(
    `<img src="${flowerImages[indexes]}" alt="Flower Image" class="card-image"/>`
  );
  document.write(`<div class="card-content">`);
  document.write(
    `<h2 class="flower-name">${`flower Name : ${flowers[i]}`}</h2>`
  );
  document.write(`<div class="flower-details">`);
  document.write(`<div class="colors">`);
  // colors
  for (let m = 0; m < flowerColors[indexes].length; m++) {
    console.log(`${flowerColors[indexes][m]}`);
    document.write(
      `<div class="color-circle" style="background-color: ${flowerColors[indexes][m]}">`
    );
    document.write(`</div>`);
  }
  document.write(`<div class="zises">`);
  // // sizes
  for (let x = 0; x < flowerSizes[indexes].length; x++) {
    console.log(flowerSizes[indexes][x]);
    document.write(`<div class="size-circle">`);
    document.write(
      `<span class="circle-text">${flowerSizes[indexes][x]
        .slice(0, 1)
        .toUpperCase()}</span>`
    );
    document.write(`</div>`);
  }

  document.write(`</div>`);
  document.write(`</div>`);
  document.write(`<button class="add-to-cart">Add to Cart</button>`);
  document.write(`</div>`);
  document.write(`</div>`);
  document.write(`</div>`);

  //console.log("#".repeat(40));
}
document.write(`</div>`);

// Flower Name is Rose
// 0
// Image Url : https://cdn.pixabay.com/photo/2020/04/24/13/46/rose-5086924_1280.jpg
// Small
// Medium
// Large
// Flower Name is Tulip
// 1
// Image Url : https://cdn.pixabay.com/photo/2022/04/09/05/23/tulip-7120784_1280.jpg
// Small
// Medium
// Flower Name is Sunflower
// 2
// Image Url : https://cdn.pixabay.com/photo/2021/08/15/06/54/sunflower-6546993_1280.jpg
// Large
// Extra Large
// Flower Name is Daisy
// 3
// Image Url : https://cdn.pixabay.com/photo/2023/07/14/10/50/flower-8126748_1280.jpg
// Small
// Medium
// Flower Name is Orchid
// 4
// Image Url : https://cdn.pixabay.com/photo/2022/02/08/16/28/flower-7001678_1280.jpg
// Medium
// Large
// Extra Large

const Students = ["warda", "xasan", "Maxamad", "Mukhtaar", "Laki"];
let highSchoolSubjects = ["Mathematics", "Physics", "Biology", "Chemistry"];
mainLoop: for (let i = 0; i < Students.length; i++) {
  nestedLoop: for (let x = 0; x < highSchoolSubjects.length; x++) {
    if (Students[i] === "Mukhtaar") continue mainLoop;
    console.log(highSchoolSubjects[x]);
  }
  console.log(` ---- ${Students[i]}`);
}
