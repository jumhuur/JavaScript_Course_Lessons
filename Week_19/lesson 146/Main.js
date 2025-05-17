const user = {
  name: "Amina",
  age: 25,
};

let copy = { ...user };

const Info = {
  job: "Amina",
  addres: 25,
};

console.log(user);
console.log(Info);

let fulluserInfo = { ...user, ...Info };
console.log(fulluserInfo);
console.log(copy);
let updatedinfo = {
  ...fulluserInfo,
  job: "cooking",
  addres: "Hargaysa",
  isonline: true,
};
console.log(updatedinfo);
