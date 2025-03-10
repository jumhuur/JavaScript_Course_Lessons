// Events
const btn = document.querySelector("button");
// btn.onclick = function () {
//   console.log(btn);
// };

// right click
oncontextmenu = function () {
  console.log("right click");
};

btn.ondblclick = () => {
  console.log("dbclick");
};
