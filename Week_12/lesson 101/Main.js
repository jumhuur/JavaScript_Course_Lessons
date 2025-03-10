// addEventListener
let btn = document.querySelector("button");
let input = document.querySelector("input");

// btn.onclick = () => {

// }

btn.addEventListener("click", () => {
  console.log("click");
});

btn.addEventListener("mouseenter", Eventhandle);

function Eventhandle() {
  console.log(btn.textContent);
}

input.addEventListener("input", () => {
  console.log(input.value);
});

const button = document.getElementById("btn");

button.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});
