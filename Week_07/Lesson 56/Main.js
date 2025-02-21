// Default Function Parameters
function Salaan(Name = "Marti") {
  console.log(`Soo dhawaaw ${Name}`);
}

// wicitaan
Salaan("cali");
Salaan("xuseen");
Salaan();

console.log("#".repeat(75));

function Product(ProName = "none", Price = 0) {
  console.log(`Your Product: ${ProName}`);
  console.log(`price is ${Price}$`);
}

Product("Saacad", 15.5);
Product("Shaadh", 23.65);

Product();
