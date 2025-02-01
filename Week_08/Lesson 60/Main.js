//Anonymous Function vs. Named Function
console.log(NameFun("maxamad", "cali", "cimraan"));
document.write(`<h2>${NameFun("maxamad", "cali", "cimraan")}</h2>`);
function NameFun(...names) {
  return `soo dhawaada ${names.join(" | ")}`;
}

let Myfunction = function () {
  return "hi";
};
console.log(Myfunction());
