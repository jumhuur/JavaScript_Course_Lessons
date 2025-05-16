// Example
let start = new Date("1998-1-30").getTime();
let end = new Date("2020-9-10").getTime();

// calc
const farqi = end - start;
console.log(farqi); // ms

// sikino
const sikino = farqi / 1000;
const minit = sikino / 60;
const saacad = minit / 60;
const maalin = saacad / 24;
const Week = maalin / 7;
const sanad = maalin / 365;
console.log("sikin", sikino); // s
console.log(`minit`, minit); // m
console.log("saacad", saacad); // h
console.log("maalin", maalin); // day
console.log("Weeek", Week); // w
console.log("sanad", sanad); // y
