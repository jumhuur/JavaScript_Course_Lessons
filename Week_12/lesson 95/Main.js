// append and prepend
const main = document.querySelector("div.main");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");

// qoraalo
p1.textContent = "qoraal 1aad";
const textp2 = document.createTextNode("qoraal 2aad");
const textp3 = document.createTextNode("qoraal 3aad");

// qoraalka lagu dhex rido p-tag
p2.appendChild(textp2);
p3.appendChild(textp3);

// console.log(p1);
// console.log(p2);
// console.log(p3);

// main.append(p1);
// main.append(p2);
// main.append(p3);

main.prepend(p1);
main.prepend(p2);
main.prepend(p3);
