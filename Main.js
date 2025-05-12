// testing

// Tusaale 1aad Array
const array_data = ["jimcaale", "muuse", "wahiib"];
const displaydata = (Data) => {
  let [name1, name2, name3] = Data;
  console.log(`welcome ${name1} and ${name2} and ${name3}`);
};

displaydata(array_data); // welcome jimcaale and muuse and wahiib

// Tusaale 2 object
const Object_data = { name: "jimcaale", age: "23", job: "web dev" };
const Userdata = (Data) => {
  let { name, age, job } = Data;
  return `Welcome ${name} , Your Job is ${job} and Your age is ${age}`;
};

console.log(Userdata(Object_data)); // Welcome jimcaale , Your Job is web dev and Your age is 23

// spread
const qoraal = "Taysiir";
console.log(qoraal);
console.log(...qoraal);
console.log([...qoraal]);

const fruits1 = ["tufaax", "moos"];
const fruits2 = ["canab", "liin"];

const allFruits = [...fruits1, ...fruits2];
console.log(allFruits); // ['tufaax', 'moos', 'canab', 'liin']

const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // [1, 2, 3]

const numbers = [3, 5, 7];
console.log(Math.min(...numbers)); // 7

const students = [
  {
    name: "Ahmed Ali",
    age: 20,
    studentId: "ST001",
    grade: "Grade 12",
  },
  {
    name: "Zahra Hassan",
    age: 19,
    studentId: "ST002",
    grade: "Grade 11",
  },
  {
    name: "Khalid Mohamed",
    age: 21,
    studentId: "ST003",
    grade: "Grade 12",
  },
  {
    name: "Ayaan Yusuf",
    age: 18,
    studentId: "ST004",
    grade: "Grade 10",
  },
  {
    name: "Fatima Abdullahi",
    age: 22,
    studentId: "ST005",
    grade: "Grade 13",
  },
];

function* gendata(list) {
  for (let strudent of list) {
    yield strudent;
  }
}

let gennum = gendata(students);
console.log(gennum.next());
console.log(gennum.next());
console.log(gennum.next());
console.log(gennum.next());
console.log(gennum.next());

// const pro = new Promise((res, rej) => {
//   const data = fetch("https://api.github.com/users/jumhuur");
//   console.log(data);
//   const jsondata = data.json;
//   res(data);
// }).then((result) => {
//   console.log(result);
// });
const getdata = async (name) => {
  const data = await fetch(`https://api.github.com/users/${name}/repos`);
  const jsodata = await data.json();
  console.log(`Repos-kaaga dhamaan waa ${jsodata.length}`);
  console.log(jsodata);
  for (repo of jsodata) {
    //console.log(repo);
    const {
      name,
      default_branch,
      forks,
      open_issues_count,
      id,
      collaborators_url,
      owner: { login },
    } = repo;
    console.log("--- repo name", name);
    console.log("--branch", default_branch);
    console.log("- issues", open_issues_count);
    console.log("- forks", forks);
    console.log("--- repo Id", id);
    console.log("- owner", login);
  }
};

getdata("microsoft");
