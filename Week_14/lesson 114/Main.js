// open and close
const btnWeek = document.querySelector("button.close");
const btnclose = document.getElementById("close");

let newwindow;
btnWeek.addEventListener("click", () => {
  newwindow = open(
    "https://taysiir.net",
    "cali",
    "width=330, height=570",
    false
  );
});

btnclose.addEventListener("click", () => {
  newwindow.close();
});
