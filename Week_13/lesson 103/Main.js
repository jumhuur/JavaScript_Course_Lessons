const items = document.querySelectorAll("li"); // nodelist
const myitems = document.getElementsByTagName("li"); // html collection
// console.log(items);
// console.log(myitems);

loop;
items.forEach((item, index) => {
  console.log(`--- index is ${index}`);
  console.log(item);
});

Array.from(myitems).forEach((item) => {
  console.log(item);
});

// array.from
const str = "taysiir online";
console.log(Array.from(str));
