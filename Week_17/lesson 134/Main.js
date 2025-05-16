// Format time and date
const date = new Date();
let format = date.toLocaleDateString("hi-IN", {
  weekday: "long",
  year: "numeric",
  day: "numeric",
  month: "long",
});

let format2 = date.toLocaleDateString("en-US", { dateStyle: "full" });
let format3 = date.toLocaleDateString("en-US", { dateStyle: "long" });
let format5 = date.toLocaleDateString("en-US", { dateStyle: "medium" });
let format4 = date.toLocaleDateString("en-US", { dateStyle: "short" });

console.log(format);
console.log(format2);
console.log(format3);
console.log(format4);
console.log(format5);
