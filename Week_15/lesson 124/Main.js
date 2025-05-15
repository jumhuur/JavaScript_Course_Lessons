const color = document.querySelector("input#color");
const Body = document.querySelector("body");
const ul = document.querySelector("ul");
const h2 = document.querySelector("h2");
const btn = document.querySelector("button");

let allColors = JSON.parse(localStorage.getItem("AllColors")) || [];
let lastcolor = localStorage.getItem("Color");

// new function
const setData = () => {
  Body.style.backgroundColor = lastcolor || "#fff";
  h2.style.color = lastcolor ? "#fff" : "#000";
  // loop

  allColors.forEach((color, index) => {
    const listitem = document.createElement("li");
    console.log(`color ${index + 1}`, color);
    listitem.textContent = `${index + 1} ${color}`;
    listitem.style.backgroundColor = color;
    listitem.style.color = "#fff";
    ul.appendChild(listitem);
  });
};

const colorChange = () => {
  const input_color = color.value;
  allColors.push(input_color);
  lastcolor = input_color;
  Body.style.backgroundColor = lastcolor;
  h2.style.color = "#fff";

  // localStorage
  localStorage.setItem("AllColors", JSON.stringify(allColors));
  localStorage.setItem("Color", lastcolor);
  // loop
  const listitem = document.createElement("li");
  allColors.forEach((color, index) => {
    console.log(`color ${index + 1}`, color);
    listitem.textContent = `${index + 1} ${color}`;
    listitem.style.backgroundColor = color;
    listitem.style.color = "#fff";
    ul.appendChild(listitem);
  });
};

const clearAll = () => {
  localStorage.clear();
  ul.innerHTML = "";
  Body.style.backgroundColor = "#fff";
  h2.style.color = "#000";
  color.value = "";
};

btn.addEventListener("click", clearAll);
color.addEventListener("input", colorChange);
setData();
