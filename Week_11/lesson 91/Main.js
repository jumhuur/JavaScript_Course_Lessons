//Getting and Setting Content Part (1)

// get content
const Ciwaan = document.getElementById("ciwaan");
const btn = document.querySelector("button");
const card = document.getElementById("card");
const mydiv = document.getElementById("divone");
console.log(Ciwaan.textContent);
console.log(btn.textContent);

// set content
Ciwaan.textContent = "ciwaan cusub oo js ah";
btn.textContent = "delete";

console.log(card.innerHTML);
mydiv.innerHTML = `<p>soo dhawaaw</p>`;
