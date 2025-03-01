// Adding Elements to the Page

// elements
const div = document.createElement("div");
const h2 = document.createElement("h2");
const p = document.createElement("p");
const btn = document.createElement("button");

// add class and id
div.setAttribute("class", "card");
h2.setAttribute("class", "heading");
p.setAttribute("class", "text");
btn.setAttribute("id", "btn");

// create text
let h2text = document.createTextNode("Product name");
let p_text = document.createTextNode("Product name and desc");
let btn_text = document.createTextNode("add to cart");

// adding
h2.appendChild(h2text);
p.appendChild(p_text);
btn.appendChild(btn_text);

// div add elements
div.appendChild(h2);
div.appendChild(p);
div.appendChild(btn);

//

document.body.appendChild(div);
// daabac
console.log(div);
