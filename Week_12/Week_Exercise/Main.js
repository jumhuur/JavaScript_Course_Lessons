// Loop Elements
let p = document.querySelector("p");
const inputes = document.querySelectorAll("input");
const Name = inputes[0];
const password = inputes[1];
const conPassword = inputes[2];

Name.addEventListener("input", (e) => {
  let value = e.target.value;
  if (value.length > 15) {
    p.textContent = "soo gaabi magaca";
    p.classList.add("active");
    e.target.classList.add("Error");
  }

  if (value.length <= 2) {
    p.textContent = "ha ka bato magacaagu 2 xaraf";
    p.classList.add("active");
    e.target.classList.add("Error");
  }

  if (value.length > 2 && value.length < 15) {
    p.textContent = "ha ka bato magacaagu 2 xaraf";
    p.classList.remove("active");
    e.target.classList.remove("Error");
  }
});

password.addEventListener("input", (e) => {
  let value = e.target.value;
  if (value.length < 4) {
    p.textContent = "Pasawor-kaagu ugu yaraan ha noqodo 4 god";
    p.classList.add("active");
    e.target.classList.add("Error");
  }

  if (value.length > 4) {
    p.classList.remove("active");
    e.target.classList.remove("Error");
  }
});

conPassword.addEventListener("input", (e) => {
  let value = e.target.value;
  if (password.value !== value) {
    p.textContent = "isku mid maaha labada password";
    p.classList.add("active");
    e.target.classList.add("Error");
  } else {
    p.textContent = "isku mid maaha labada password";
    p.classList.remove("active");
    e.target.classList.remove("Error");
  }
});
