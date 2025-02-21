// const Name = ["Maxamad", "xasan", "cismaan", "Laki", "cabdi", 232];

// for (let i = 0; i < Name.length; i++) {
//   document.write(`<h3>Welcome : ${Name[i]} </h3>`);
// }

// Array of flower names
let flowers = ["Rose", "Tulip", "Sunflower", "Daisy", "Orchid"];

// Array of flower Images
let flowerImages = [
  "https://cdn.pixabay.com/photo/2020/04/24/13/46/rose-5086924_1280.jpg", // Rose
  "https://cdn.pixabay.com/photo/2022/04/09/05/23/tulip-7120784_1280.jpg", // Tulip
  "https://cdn.pixabay.com/photo/2021/08/15/06/54/sunflower-6546993_1280.jpg", // Sunflower
  "https://cdn.pixabay.com/photo/2023/07/14/10/50/flower-8126748_1280.jpg", // Daisy
  "https://cdn.pixabay.com/photo/2022/02/08/16/28/flower-7001678_1280.jpg", // Orchid
];
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
  ["#FFFFFF", "#FFFAF0"], // Daisy colors (white, floral white)
  ["#DA70D6", "#9932CC"], // Orchid colors (orchid, dark orchid)
];

for (let i = 0; i < flowers.length; i++) {
  console.log(`--- flower name : ${flowers[i]}`);
  const indexes = flowers.indexOf(flowers[i]);
  console.log(flowerImages[indexes]);
}
