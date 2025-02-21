//Adding and Updating an Object Using Dot Notation
const User = {};
console.log(User);
User.Name = "cali cabdiraxaman";
User.age = 45;
User.class = "4B";
User.Skills = ["Html", "Css", "Js"];
User.salaan = function () {
  return "Hello";
};
console.log(User);
//console.log(User.Skills.join(" | "));
User.Name = "xamse maxamad";
User.age = 20;
User.class = "3A";
console.log(User);
