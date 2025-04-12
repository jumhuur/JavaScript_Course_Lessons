// scroll
const btn = document.querySelector("button.close");
const servsection = document.querySelector("div.serv");
let scrollBy = () => {
  scrollBy(50, 100);
  console.log("y", scrollY); // 0
  console.log("x", scrollX); // 0
};

scrollBy();

let scrollTo = () => {
  scrollBy(50, 100);
  console.log("y", scrollY); // 0
  console.log("x", scrollX); // 0
};

scrollTo();

btn.addEventListener("click", () => {
  servsection.scrollIntoView({ behavior: "smooth" });
});

let count = 0;
window.addEventListener("scroll", () => {
  //console.log(count++);
  console.log(scrollY);
});
