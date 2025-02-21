// else if()

let Price = 300;
let Discount = true;
let DiscountAmount = 20;

// hadii disc qiimo dhimis inaynu smayno
// hadii qiimaha uu ka wayn yahay 200  qiimo dhimis

if (Discount === true) {
  Price = Price - DiscountAmount;
} else if (Price > 200) {
  Price = Price - DiscountAmount;
}

console.log(`Total : ${Price}$`);

let Price1 = 250;
let Discount1 = false;
let DiscountAmount1 = 20;
let country = "Ksa";
let countryDiscount = 45;

if (Discount1 === true) {
  Price1 = Price1 - DiscountAmount1;
} else if (country === "som") {
  Price1 = Price1 - countryDiscount;
} else if (Price1 > 200) {
  Price1 = Price1 - DiscountAmount1;
}

console.log(`Total : ${Price1}$`);
