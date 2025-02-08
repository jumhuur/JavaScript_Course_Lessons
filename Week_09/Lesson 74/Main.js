// reduce()
const Numbers = [1, 2, 3, 4, 5];
let Myreduce = Numbers.reduce(function (acc, cvalue, index, array) {
  //   console.log(`acc ${acc}`);
  //   console.log(`cvalue : ${cvalue}`);
  //   console.log(`index ${index}`);
  //   console.log(`array-ga: ${array}`);
  return acc + cvalue;
});

console.log(Myreduce);
