// toString()
const Mynum = 134;
console.log(Mynum); // 134
console.log(typeof Mynum); // number
console.log(Mynum.toString()); // 134 string
console.log(typeof Mynum.toString()); // string

//toFixed()
const num = 90.87878234242342340938249;
console.log(num.toFixed(1)); //90.9
console.log(num.toFixed(2)); // 90.88
console.log(num.toFixed(3)); // 90.879

//parseInt()
let str = "123.45"; // string
const toNumb = parseInt(str);
console.log(str);
console.log(toNumb); // 123

//parseFloat()
const ToNum1 = parseFloat(str);
console.log(ToNum1);

let like = "34654 Likes";
const likesNumb = parseInt(like); // 34654
console.log(likesNumb);
let Likes = "Video likes is 6578.56789 Like";
console.log(parseInt(Likes)); // NaN

// Number()
let str1 = "123";
console.log(Number(str1)); //123
let usename = "cali";
console.log(Number(usename)); // NaN

//isNaN()
console.log(isNaN(123)); // false
console.log(isNaN("abc")); // true
let Name = "cali";
let Age = 26;
console.log(isNaN(Name)); // true
console.log(isNaN(Age)); // false
