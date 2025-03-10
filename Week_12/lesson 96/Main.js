// children and  childNodes
const main = document.querySelector("div.main");
const child = main.children;
console.log(child);
console.log(child[0]);
console.log(child[1]);

const child2 = main.childNodes;
console.log(child2[7]);

// element text comment white space
let fchild = main.firstChild;
let lchild = main.lastChild;

// element html tag
let fechild = main.firstElementChild;
let lechild = main.lastElementChild;

console.log(fchild);
console.log(lchild);

console.log(fechild);
console.log(lechild);
