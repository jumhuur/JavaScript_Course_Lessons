// Global and Local Scope

let A = 10; // GLOBAL SCOPE

function Scope() {
  let A = 20; // local scope
  return `fom local scope ${A}`;
}

console.log(Scope());
console.log(A);
