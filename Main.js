// append
const div = document.createElement("div");
const p = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
// create text
const Text = document.createTextNode("Qoraal 1aad");
const Text2 = document.createTextNode("Qoraaal 2aad");
const Text3 = document.createTextNode("Qoraal 3aad");

p.appendChild(Text);
p2.appendChild(Text2);
p3.appendChild(Text3);

div.append(p);
div.append(p2);
div.append(p3);

document.body.appendChild(div);

//prepend()

// children
const main = document.querySelector("div.main");
const chil = main.children;
const chilnode = main.childNodes;
console.log(chil);
console.log(chilnode);
// waxaan xabad xabad ugu heli karaa index-ka
console.log(chil[0]);

const input = document.querySelector("input");
input.oninput = () => {
  console.log(input.value);
};

let btn = document.querySelector("button");
btn.onmousemove = () => {
  console.log("leave");
};

oncontextmenu = () => {
  console.log("Rigth click");
};

const body = document.body;
input.onselect = () => {
  console.log("select");
};

input.addEventListener("keypress", function (e) {
  console.log(e.target);
});

div.addEventListener("click", function (e) {
  console.log(e.target);
});

// classlist
const p_text = document.getElementById("text");
const add = document.querySelector("button.add");
const remove = document.querySelector("button.remove");
const toggle = document.querySelector("button.toggle");

add.addEventListener("click", function () {
  p_text.classList.add("highlight");
});

remove.addEventListener("click", () => {
  p_text.classList.remove("highlight");
});

toggle.addEventListener("click", () => {
  p_text.classList.toggle("highlight");
});

console.log(p_text.classList.contains("highlight"));
