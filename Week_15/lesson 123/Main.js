// array to localStorage
// const Users = [
//   {
//     name: "maxamad",
//     age: "25",
//     job: "dev",
//   },
//   {
//     name: "cismaan",
//     age: "20",
//     job: "Editor",
//   },
//   {
//     name: "mascuud",
//     age: "19",
//     job: "Full Stack",
//   },
//   {
//     name: "nimcaan",
//     age: "20",
//     job: "islamic",
//   },
// ];

// localStorage.setItem("Users", JSON.stringify(Users));
let fom_local = JSON.parse(localStorage.getItem("Users"));

let i = 0;
while (i < fom_local.length) {
  console.log(fom_local[i].name);
  i++;
}
