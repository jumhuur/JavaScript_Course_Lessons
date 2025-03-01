// Creating html tag
const div = document.createElement("div");
const p = document.createElement("p");
const section = document.createElement("section");
div.setAttribute("class", "div_js");
p.setAttribute("class", "qoraal");
p.textContent = "qoraal tijaabo ah ";
section.setAttribute("class", "containar");
console.log(div);
console.log(p);
console.log(section);

// create text
const text = document.createTextNode("qoraal test ah ");
console.log(text);

// create comments

const comment = document.createComment("this is comment");
console.log(comment);
