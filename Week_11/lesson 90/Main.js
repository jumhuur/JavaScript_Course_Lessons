// example
// talabada 1aad
const card = document.querySelector(".card");
const btn = document.querySelector("button");
// console.log(card);
// console.log(btn);

// console.log(mode);

// talaabada 3aad
btn.onclick = function changeMode() {
  // talaabada 2aad
  const mode = card.className;
  if (mode === "card light") {
    card.setAttribute("class", "card dark");
  } else if (mode === "card dark") {
    card.setAttribute("class", "card light");
  }
};
