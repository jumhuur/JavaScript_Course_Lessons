// Checking or Removing Attributes
const input = document.querySelector("input");
if (input.hasAttribute("class")) {
  console.log("ok");
} else {
  console.log("no");
}

console.log(input.hasAttribute("class"));

// u sii hubino qiimaha attribute
const type = input.getAttribute("type");
console.log(type);

if (type === "ll") {
  console.log("text");
} else {
  console.log("password");
}

console.log(input.hasAttributes());

// remove
console.log(input);
input.removeAttribute("name");
input.removeAttribute("type");
console.log(input);
