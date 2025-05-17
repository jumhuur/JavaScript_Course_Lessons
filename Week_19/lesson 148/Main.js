import { xisaab, iskugayn, kajar, numbers } from "/math.js";
console.log(xisaab);
console.log(iskugayn(50, 50));
console.log(kajar(10, 5));
console.log(numbers);

let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}
console.log("*".repeat(45));
const [n1, , , , , n2] = numbers;
console.log(n1);
console.log(n2);
