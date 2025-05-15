//localStorage  string json

// setitem("key", "value")
localStorage.setItem("username", "taysiir");
localStorage.setItem("mode", "dark");
localStorage.setItem("UserId", "12343213132");
localStorage.setItem("number", 123);
localStorage.setItem("isdark", false);
localStorage.setItem("list", ["maxamad", "cismaan", "ibraahim"]);
// // removeItem
// localStorage.removeItem("username");
// localStorage.removeItem("UserId");
// localStorage.removeItem("number");
// localStorage.removeItem("mode");
// localStorage.removeItem("list");
// getitem
localStorage.clear();
let Username = localStorage.getItem("username");
let My_mode = localStorage.getItem("mode");
let UserId = localStorage.getItem("UserId");
let number = localStorage.getItem("number");
let isdark = localStorage.getItem("isdark");
let list = localStorage.getItem("list");

console.log(Username);
console.log(My_mode);
console.log(UserId);
console.log(number);
console.log(isdark);
console.log(list);

// cadayn
// console.log(typeof number);
// console.log(typeof isdark);
// console.log(typeof list);
