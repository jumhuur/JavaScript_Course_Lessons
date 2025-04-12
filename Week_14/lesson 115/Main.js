const btnWeek = document.querySelector("button.close");
const btnclose = document.getElementById("close");
let Timer = setTimeout(function () {
  let suaal = confirm("ma doonaysaa inaad iska xidho webkan");
  if (suaal === true) {
    window.close();
  } else if (suaal === false) {
    alert("Mahadsanid");
  }
  console.log("6 sikin kadib");
}, 6000); // mls = 6000 = 6s

clearTimeout(Timer);

let count = 1;
let time = setInterval(() => {
  if (count === 20) {
    clearInterval(time);
  }
  console.log(count++);
}, 1000); // 1000 = 1s
