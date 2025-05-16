// Example
//const date = new Date().getTime();
//const now = Date.now();

const starttime = Date.now();
// opration
// for (let i = 0; i < 100000; i++) {
//   console.log(i + 1);
// }
let i = 0;
while (i < 100000) {
  console.log(i + 1);
  i++;
}
const endtime = Date.now();

console.log(`hawshan waxaa lagu qabtay ${endtime - starttime} ms`);
console.log(`hawshan waxaa lagu qabtay ${(endtime - starttime) / 1000} s`);
