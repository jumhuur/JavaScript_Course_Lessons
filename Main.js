// DOM Traversing
let Box = document.getElementById("box");
const fchild = Box.children[0]; // html collection
console.log(fchild);

let schild = fchild.nextElementSibling;
console.log(schild);
let p3 = schild.nextElementSibling;
console.log(p3);

let p4 = p3.nextElementSibling;
console.log(p4);

//

const qoraal3 = p4.previousElementSibling;
console.log(qoraal3);

let childbox = fchild.parentElement;

console.log(childbox);
