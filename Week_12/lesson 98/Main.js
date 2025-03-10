// mouse event
const btn = document.querySelector("button");

btn.onmousedown = () => {
  console.log(btn);
  console.log("mousedown");
};

btn.onclick = () => {
  console.log("click");
};

btn.onmouseenter = () => {
  console.log("mouse enter");
};

btn.onmouseleave = () => {
  console.log("mouse leave");
};

btn.onmousemove = () => {
  console.log(btn);
  console.log("mouse move");
};
