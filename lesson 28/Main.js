let Price1 = 100;
let Discount1 = false;
let DiscountAmount1 = 20;
let country = "Ksa";
let countryDiscount = 45;

if (Discount1 === true) {
  Price1 = Price1 - DiscountAmount1;
  console.log(`Total : ${Price1}$`);
} else if (country === "som") {
  Price1 = Price1 - countryDiscount;
  console.log(`Total : ${Price1}$`);
} else if (Price1 > 200) {
  Price1 = Price1 - DiscountAmount1;
  console.log(`Total : ${Price1}$`);
} else {
  Price1 = Price1 - 5;
  console.log(`Total : ${Price1}$`);
}

if (shardi) {
  // code 1
} else {
  //code 2
}
