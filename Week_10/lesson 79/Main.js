// Dot Notation and Bracket Notation
let Person = {
  // Properties
  Name: "Cali",
  Age: 23,
  skills: ["Html", "Css", "Js"],
  Live: true,
  // Methods
  sayhello: function () {
    return "Hello";
  },
};

// console.log(Person.Name);
// console.log(Person.Age);
// console.log(Person.Live);
// console.log(Person.skills);

// console.log(Person.sayhello());

// Person.skills.forEach((Skill) => {
//   console.log(Skill);
// });

console.log(Person["Name"]);
console.log(Person["Age"]);
console.log(Person["Live"]);
console.log(Person["skills"]);

Person["skills"].forEach((skill) => {
  console.log(skill);
});

// Error
console.log(Person["sayhello"]());
