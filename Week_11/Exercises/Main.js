// Exercises Week 11
console.log("-------Exercises 38------");
const btn = document.getElementById("Switch");
const containar = document.createElement("div");
for (let i = 0; i < 500; i++) {
  // samee dhamaan elements
  const box = document.createElement("div");
  const icon = document.createElement("div");
  const info = document.createElement("div");
  const Heading = document.createElement("h2");
  const Desc = document.createElement("p");
  const button = document.createElement("button");

  // samaynta qoraalada
  const icontext = document.createTextNode(i + 1);
  const HeadingText = document.createTextNode(`Service ${i + 1}`);
  const DescText = document.createTextNode(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem incidunt accusantium ."
  );
  const buttonText = document.createTextNode("Get Start");

  // add class and ids
  containar.setAttribute("class", "containar light");
  box.setAttribute("class", "box");
  icon.setAttribute("class", "icon");
  info.setAttribute("class", "info");

  // add text to elements
  icon.appendChild(icontext);
  Heading.appendChild(HeadingText);
  Desc.appendChild(DescText);
  button.appendChild(buttonText);

  // add elements to elements
  containar.appendChild(box);
  //info
  info.appendChild(Heading);
  info.appendChild(Desc);
  // box
  box.appendChild(icon);
  box.appendChild(info);
  box.appendChild(button);
  document.body.appendChild(containar);
}

// change mode
btn.onclick = () => {
  const Mode = document.body.getAttribute("class");
  const body = document.body;
  if (Mode === "light") {
    body.setAttribute("class", "dark");
    containar.setAttribute("class", "containar dark");
    btn.setAttribute("class", "dark");
    btn.textContent = "Change To Light";
  } else {
    body.setAttribute("class", "light");
    containar.setAttribute("class", "containar light");
    btn.removeAttribute("class");
    btn.textContent = "Change To Dark";
  }
};
