let TotalPrice = 190;
const student = true;
const Discount = true;
const DiscoundAmount = 10;
const studentsDiscount = 25;

if (Discount === true) {
  if (student === true) {
    TotalPrice = TotalPrice - studentsDiscount;
  }
  TotalPrice = TotalPrice - DiscoundAmount;
  console.log(`Total : ${TotalPrice}`);
} else {
  console.log("Qiimo dhimis laguuma samayn");
}

let marks = 65;
if (marks >= 50) {
  console.log("waad gudubtay");

  if (marks >= 80) {
    console.log("Waxad tahay A");
  } else if (marks >= 60) {
    console.log("waxaad tahay B");
  } else {
    console.log("waxaad tahay C");
  }
} else {
  console.log("waad dhacday");
}
