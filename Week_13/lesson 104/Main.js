// Loop
const li = document.querySelectorAll("li"); // nodelist
const li2 = document.getElementsByTagName("li"); // html collection

// for
for (let i = 0; i < li.length; i++) {
  console.log(`index is -- ${i} `);
  console.log(li[i]);
}
console.log("*".repeat(30));
for (let x = 0; x < li2.length; x++) {
  console.log(`index is -- ${x} `);
  console.log(li2[x]);
}

console.log("*".repeat(30));

// for of

const list = [1, 2, 3, 4, 5, 6];

for (let item of list) {
  console.log(item);
}

console.log("*".repeat(30));

// nodelist
for (let listitem of li) {
  console.log(listitem);
}
console.log("*".repeat(30));
//  html collection
for (let i of li2) {
  console.log(i);
}

// loop elements example

// nodelist[]
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  li.forEach((item) => {
    item.classList.toggle("active");
  });
});
// btn.addEventListener("click", Ex);
// function Ex() {
//   for (let Item of li2) {
//     Item.classList.add("active");
//   }
// }

console.log("*".repeat(30));
// loop
li.forEach((el) => {
  el.addEventListener("click", function (event) {
    //console.log(event.target);
    //console.log(el);

    for (let list of li) {
      list.classList.remove("active");
    }
    el.classList.toggle("active");
  });
});
