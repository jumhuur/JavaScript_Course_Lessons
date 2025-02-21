// Dot Notation vs. Bracket Notation
const Key = "Live";
let Person = {
  // Properties
  Name: "Cali",
  Age: 23,
  skills: ["Html", "Css", "Js"],
  Live: true,
  "Parent Name": "Caisha",
  // Methods
  sayhello: function () {
    return "Hello";
  },
};

console.log(Person[Key]);

console.log(Person["Parent Name"]);
