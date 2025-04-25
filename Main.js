// elements
const body = document.querySelector("body");
const Head = document.querySelector("div.main_head");
const input = document.querySelector("form input");
const btn = document.querySelector("form button");
const lists = document.querySelector("div.list");
const text = document.querySelector("div.text p");
const modelist = document.querySelector("div.list_mode");
const switchermode = document.querySelector("div.mode");
const allmodes = document.querySelectorAll("ul.drop_mode li");
const modeicon = document.getElementById("mode_icon");
const form = document.querySelector("form");
const listrapper = document.querySelector("div.lists");

// get all todolists
const allTodo = localStorage.getItem("todos");
const Todo_lists = JSON.parse(allTodo) || [];
//localStorage.setItem("mode", "false");
const data = navigator.userAgentData;
// open and close mode list
switchermode.addEventListener("click", () => {
  modelist.classList.toggle("active");
});

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
      modeicon.innerHTML = `<i class="bx bx-desktop"></i>`;
    } else {
      body.classList.remove("dark");
      Head.classList.remove("dark");
      input.classList.remove("dark");
      btn.classList.remove("dark");
      lists.classList.remove("dark");
      text.classList.remove("dark");
      modeicon.innerHTML = `<i class="bx bx-desktop"></i>`;
    }
  }

  if (Localmode === "true") {
    body.classList.add("dark");
    Head.classList.add("dark");
    input.classList.add("dark");
    btn.classList.add("dark");
    lists.classList.add("dark");
    text.classList.add("dark");
    modeicon.innerHTML = `<i class="bx bxs-moon"></i>`;
  } else if (Localmode === "false") {
    body.classList.remove("dark");
    Head.classList.remove("dark");
    input.classList.remove("dark");
    btn.classList.remove("dark");
    lists.classList.remove("dark");
    text.classList.remove("dark");
    modeicon.innerHTML = `<i class="bx bxs-sun"></i>`;
  }
};

setmode();

// change mode
allmodes.forEach((mode) => {
  mode.addEventListener("click", (e) => {
    const class_now = e.target.className;
    console.log(class_now);
    if (class_now === "bx bxs-moon") {
      localStorage.setItem("mode", "true");
      modeicon.innerHTML = `<i class="bx bxs-moon"></i>`;
      setmode();
    } else if (class_now === "bx bxs-sun") {
      localStorage.setItem("mode", "false");
      modeicon.innerHTML = `<i class="bx bxs-sun"></i>`;
      setmode();
    } else {
      localStorage.removeItem("mode", "false");
      modeicon.innerHTML = `<i class="bx bx-desktop"></i>`;
      setmode();
    }
  });
});
// add todolist
window.onmouseenter;
btn.addEventListener("click", (e) => {
  const Todo = {
    id: crypto.randomUUID(),
    Title: input.value,
    complate: false,
  };

  if (input.value != "") {
    Todo_lists.push(Todo);
    localStorage.setItem("todos", JSON.stringify(Todo_lists));
    input.value = "";
  } else {
    alert("you cant add empty todo ");
  }
});

const setdata = () => {
  if (Todo_lists.length === 0) {
    listrapper.innerHTML = `<div class="empty_todo">
<div class="image_empty">
  <img src="/Images/Clipboard.png" alt="empty" />
</div>
<h2>empty list</h2>
<p>There are no tasks available</p>
</div>`;
  }

  // if (Todo_lists.length > 0) {
  //   for (i = 0; i < Todo_lists.length; i++) {
  //     console.log(Todo_lists[i]);
  //     listrapper.innerHTML = `
  //     <div class="list">
  //     <div class="icon">
  //     ${
  //       todo.complate === false
  //         ? `<i class="bx bx-circle"></i>`
  //         : `<i class="bx bxs-check-circle"></i>`
  //     }

  //     </div>
  //     <div class="text">
  //     <p>
  //     ${todo.Title}
  //     </p>
  //     </div>
  //     <div class="action">
  //     <i class="bx bx-trash"></i>
  //     </div>
  //     </div>
  //   `;
  //   }
  //   // Todo_lists.forEach((todo) => {
  //   //   console.log(todo);
  //   // });
  // }
};

setdata();
