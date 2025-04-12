// Exercises 01
let totop = document.querySelector("div.totop");
console.log(totop);

window.addEventListener("scroll", () => {
  if (scrollY >= 350) {
    totop.classList.add("active");
  } else {
    totop.classList.remove("active");
  }
});

totop.addEventListener("click", () => {
  scrollTo(0, 0);
});

// Exercis 02
const Topbtn = document.querySelector("button.close");
const buttom = document.getElementById("close");

Topbtn.addEventListener("click", () => {
  let Scroll = scrollY;
  scrollTo(0, scrollY - 20);
});

buttom.addEventListener("click", () => {
  //let Scroll = scrollY;
  scrollBy(0, 20);
});
