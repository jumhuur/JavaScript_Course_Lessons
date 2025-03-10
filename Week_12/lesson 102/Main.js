// classlist
const Text = document.querySelector("p");
let btnadd = document.getElementById("btn");
let rbtn = document.querySelector("button.btn_remove");
let toggle = document.getElementById("toggle");

// classList Add
btnadd.addEventListener("click", () => {
  Text.classList.add("highlight");
});

// classlist remove
rbtn.addEventListener("click", function remove() {
  Text.classList.remove("highlight");
});

// classList toggle

toggle.addEventListener("click", () => {
  Text.classList.toggle("highlight");
  console.log(Text.classList.contains("highlight"));
});

// classList contains

//console.log(Text.classList.contains("highlight")); // false
