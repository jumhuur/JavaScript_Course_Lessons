const fruits1 = ["tufaax", "moos"];
const fruits2 = ["canab", "liin"];
const all = fruits1.concat(fruits2);
const allfruits = [...fruits1, ...fruits2];
// console.log(all);
console.log(allfruits);

const orignal = [1, 2, 3];
const copy = [...orignal];

console.log(orignal);
console.log(copy);

const Oldarray = [1, 2, 3, 4];
const updatedarray = [...Oldarray, 5, 6, 7];
console.log(Oldarray);
console.log(updatedarray);
