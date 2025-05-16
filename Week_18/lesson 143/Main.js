const User = {
  magac: "jumhuur",
  ciwaan: {
    wadan: "somaaliland",
    magaalo: "hargaysa",
  },
};

let {
  magac,
  job = "unknow",
  ciwaan: { wadan: w, magaalo: m },
} = User;
console.log(magac);
console.log(job);
console.log(w);
console.log(m);

// Tusaale 1aad Array
const array_data = ["suhur", "fahma", "suleekha"];
const displaydata = (data) => {
  let [name1, name2, name3] = data;
  return `welcome ${name1} ${name2} ${name3}`;
};

console.log(displaydata(array_data));

// Tusaale 2aad object
const Object_data = {
  name: "jimcaale",
  age: "23",
  job: "web dev",
};

function mydata(data) {
  let { name, age, job } = data;
  return `welcome ${name} your age is ${age} you are ${job}`;
}

console.log(mydata(Object_data));
