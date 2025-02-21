// Tusaale 1
const numbers = [10, 20, 30, 40, 50];
let Total = numbers.reduce((kawaad, labaad) => {
  return kawaad + labaad;
}, 50);

console.log(Total);

// Tusaale 2
const words = [
  "apple",
  "banana",
  "strawberry",
  "kiwi",
  "blueberry",
  "waxaan ahay arday",
];
const long = words.reduce(function (acc, cvalue) {
  return acc.length > cvalue.length ? acc : cvalue;
});

console.log(long);
