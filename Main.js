// elements
const body = document.querySelector("body");
const Head = document.querySelector("div.main_head");
const input = document.querySelector("section input");
const btn = document.querySelector("section button");
//const lists = document.querySelector("div.list");
//const text = document.querySelector("div.text p");
const modelist = document.querySelector("div.list_mode");
const switchermode = document.querySelector("div.mode");
const allmodes = document.querySelectorAll("ul.drop_mode li");
const modeicon = document.getElementById("mode_icon");
const form = document.querySelector("section");
const listrapper = document.querySelector("div.lists");
const complatediv = document.querySelector("div.complate > p");
const uncomplatediv = document.querySelector("div.uncomplate > p");

// get all todolists
const allTodo = localStorage.getItem("todos");
const Todo_lists = JSON.parse(allTodo) || [];
//localStorage.setItem("mode", "false");
const data = navigator.userAgentData;
// open and close mode list
switchermode.addEventListener("click", () => {
  modelist.classList.toggle("active");
});

// private

const setStaticdatat = () => {
  let complate_text = Todo_lists.filter((todo) => {
    return todo.complate === true;
  });

  let uncomplate_text = Todo_lists.filter((todo) => {
    return todo.complate === false;
  });
  complatediv.textContent = `complate : ${complate_text.length}`;
  uncomplatediv.textContent = `uncomplate : ${uncomplate_text.length}`;
};

// delete function
const DeleteTodo = (Id) => {
  console.log(Id);
  const saafi = Todo_lists.filter((todo) => {
    return todo.id != Id;
  });
  localStorage.setItem("todos", JSON.stringify(saafi));
  setdata();
  console.log(Id);
};

// update funtions
const complateTodo = (Id) => {
  let Todonow = Todo_lists.filter((Todo) => {
    return Todo.id === Id;
  });
  Todonow = [{ ...Todonow[0], complate: true }];
  console.log(Todonow);
  let All = Todo_lists.filter((Todo) => {
    return Todo.id !== Id;
  });

  All.push(...Todonow);
  localStorage.setItem("todos", JSON.stringify(All));
  setdata();
  console.log(All);
};

const setmode = () => {
  const SystemMode = matchMedia("(prefers-color-scheme: dark)").matches;
  const Localmode = localStorage.getItem("mode");
  setStaticdatat();
  console.log(SystemMode);
  console.log(Localmode);
  if (Localmode == null) {
    if (SystemMode === true) {
      body.classList.add("dark");
      Head.classList.add("dark");
      input.classList.add("dark");
      btn.classList.add("dark");
      listrapper.classList.add("dark");
      modeicon.innerHTML = `<i class="bx bx-desktop"></i>`;
    } else {
      body.classList.remove("dark");
      Head.classList.remove("dark");
      input.classList.remove("dark");
      btn.classList.remove("dark");
      listrapper.classList.remove("dark");
      modeicon.innerHTML = `<i class="bx bx-desktop"></i>`;
    }
  }

  if (Localmode === "true") {
    body.classList.add("dark");
    Head.classList.add("dark");
    input.classList.add("dark");
    btn.classList.add("dark");
    listrapper.classList.add("dark");

    modeicon.innerHTML = `<i class="bx bxs-moon"></i>`;
  } else if (Localmode === "false") {
    body.classList.remove("dark");
    Head.classList.remove("dark");
    input.classList.remove("dark");
    btn.classList.remove("dark");
    listrapper.classList.remove("dark");

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
const setdata = () => {
  setStaticdatat();
  listrapper.innerHTML = "";
  if (Todo_lists.length === 0) {
    listrapper.innerHTML = `<div class="empty_todo">
<div class="image_empty">
  <img src="/Images/Clipboard.png" alt="empty" />
</div>
<h2>empty list</h2>
<p>There are no tasks available</p>
</div>`;
  }

  if (Todo_lists.length > 0) {
    Todo_lists.forEach((todo) => {
      const sectionList = document.createElement("div");
      sectionList.classList.add("list");
      sectionList.innerHTML = `<div class="icon">
              ${
                todo.complate === false
                  ? `<i class="bx bx-circle"></i>`
                  : `<i class="bx bxs-check-circle"></i>`
              }
            </div>
            <div class="text">
            ${
              todo.complate === true
                ? `<p style="text-decoration: line-through;">
                ${todo.Title}
              </p>`
                : `<p>
                ${todo.Title}
              </p>`
            }

            </div>
            <div class="action">
              <i class="bx bx-trash"></i>
            </div>`;
      listrapper.appendChild(sectionList);
    });
  }
};

setdata();
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
    listrapper.innerHTML = "";
    setdata();
  } else {
    alert("you cant add empty todo ");
  }

  setdata();
});
setStaticdatat();
complateTodo("531014ae-a13b-4b01-bcc9-6eff430d09ae");
