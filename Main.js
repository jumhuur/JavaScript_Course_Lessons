// elements
const body = document.querySelector("body");
const Head = document.querySelector("div.main_head");
const input = document.querySelector("form input");
const btn = document.querySelector("form button");
const lists = document.querySelector("div.list");
const text = document.querySelector("div.text p");
//localStorage.setItem("mode", "false");
const data = navigator.userAgentData;
const setmode = () => {
  const SystemMode = matchMedia("(prefers-color-scheme: dark)").matches;
  const Localmode = localStorage.getItem("mode");
  console.log(SystemMode);
  console.log(Localmode);
  if (Localmode == null) {
    if (SystemMode === true) {
      body.classList.add("dark");
      Head.classList.add("dark");
      input.classList.add("dark");
      btn.classList.add("dark");
      lists.classList.add("dark");
      text.classList.add("dark");
    } else {
      body.classList.remove("dark");
      Head.classList.remove("dark");
      input.classList.remove("dark");
      btn.classList.remove("dark");
      lists.classList.remove("dark");
      text.classList.remove("dark");
    }
  }

  if (Localmode === "true") {
    body.classList.add("dark");
    Head.classList.add("dark");
    input.classList.add("dark");
    btn.classList.add("dark");
    lists.classList.add("dark");
    text.classList.add("dark");
  } else if (Localmode === "false") {
    body.classList.remove("dark");
    Head.classList.remove("dark");
    input.classList.remove("dark");
    btn.classList.remove("dark");
    lists.classList.remove("dark");
    text.classList.remove("dark");
  }
};

setmode();
