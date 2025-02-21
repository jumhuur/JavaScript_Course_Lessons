let Key = "Live";
let Person = {
  // Properties
  Name: "Cali",
  Age: 23,
  skills: ["Html", "Css", "Js"],
  Live: true,
  "Parent Name": "caisha",
  // Methods
  sayhello: function () {
    return "Hello";
  },
};
console.log("----- Dot Notation --------");
console.log(Person.Name);
console.log(Person.Age);
console.log(Person.skills);
console.log(Person.sayhello());
console.log("----- Bracket Notation --------");
console.log(Person["Name"]);
console.log(Person["Age"]);
console.log(Person["skills"]);
console.log(Person["sayhello"]());
console.log(Person[Key]); //undefined

const User = new Object({
  studentName: "Aisha",
  studentAge: 20,
});

const phone = new Object({
  phoneBrand: "Apple",
  phoneModel: "iPhone 14",
  phonePrice: 999,
});

const Student = {};
console.log(Student);
Student.name = "cabdirxamaan Mawliid";
Student.Class = "4A";
Student.Subjects = ["English", "Arbic", "Islamic", "biolgy"];
console.log(Student);

console.log(Student.name);
console.log(Student["Class"]);

Student.name = "yaasir warsame";
Student.Class = "2C";

console.log(Student.name);
console.log(Student["Class"]);

const UserApp = {
  Name: "maxamad",
  leval: 2,
  Address: {
    Ethopia: "Jigjiga",
    Soomaliland: {
      Address01: "Hargaysa | 200 str",
      Address02: "Burco | Hodan",
    },
  },
};

console.log(UserApp.Address.Ethopia);
console.log(UserApp.Address.Soomaliland.Address01);
console.log(UserApp.Address.Soomaliland.Address02);

const Users = [
  {
    name: "Ali Mohamed",
    age: 25,
    email: "ali@example.com",
    gender: "Male",
    city: "Hargeisa",
    skills: ["JavaScript", "React", "Node.js"],
    image:
      "https://plus.unsplash.com/premium_photo-1699537317988-b0d94b666661?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Aisha Hassan",
    age: 22,
    email: "aisha@example.com",
    gender: "Female",
    city: "Borama",
    skills: ["UI/UX Design", "Figma", "Adobe XD"],
    image:
      "https://images.unsplash.com/photo-1569245087840-dcf487ddbad5?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Omar Abdi",
    age: 30,
    email: "omar@example.com",
    gender: "Male",
    city: "Berbera",
    skills: ["Python", "Django", "Machine Learning"],
    image:
      "https://images.unsplash.com/photo-1564289626773-0d4085846f7b?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Fatima Yusuf",
    age: 27,
    email: "fatima@example.com",
    gender: "Female",
    city: "Burco",
    skills: ["Marketing", "SEO", "Copywriting"],
    image:
      "https://images.unsplash.com/photo-1542380841-5eef57349ca1?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Hassan Ahmed",
    age: 35,
    email: "hassan@example.com",
    gender: "Male",
    city: "Ceerigaabo",
    skills: ["Cybersecurity", "Ethical Hacking", "Networking"],
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Khadija Mohamed",
    age: 24,
    email: "khadija@example.com",
    gender: "Female",
    city: "Laascaanood",
    skills: ["Photography", "Photo Editing", "Lightroom"],
    image:
      "https://images.unsplash.com/photo-1550546094-9835463f9f71?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Abdullahi Ismail",
    age: 28,
    email: "abdullahi@example.com",
    gender: "Male",
    city: "Hargeisa",
    skills: ["DevOps", "AWS", "Docker"],
    image:
      "https://images.unsplash.com/photo-1552774021-9ebbb764f03e?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Maryam Hussein",
    age: 21,
    email: "maryam@example.com",
    gender: "Female",
    city: "Sheikh",
    skills: ["Graphic Design", "Illustrator", "Canva"],
    image:
      "https://images.unsplash.com/flagged/photo-1574801525819-959ed959af2d?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Mohamed Farah",
    age: 40,
    email: "mohamed@example.com",
    gender: "Male",
    city: "Borama",
    skills: ["Finance", "Investment", "Stock Trading"],
    image:
      "https://images.unsplash.com/photo-1552493450-2b5ce80ed13f?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Nimco Ali",
    age: 26,
    email: "nimco@example.com",
    gender: "Female",
    city: "Oodweyne",
    skills: ["Public Speaking", "Leadership", "Content Creation"],
    image:
      "https://images.unsplash.com/photo-1547527392-bd5d50305ca0?w=600&auto=format&fit=crop&q=60",
  },
];

console.log(Users);

// Magacyada
let names = Users.map((User) => {
  return `${User.name}`;
});
console.log(names);
// magaalooyinka
let city = Users.map((User) => {
  return `${User.city}`;
});
console.log(city);
// da'da
let ages = Users.map((User) => {
  return `${User.age}`;
});
console.log(ages);
// genders
let gender = Users.map((User) => {
  return `${User.gender}`;
});
console.log(gender);
// Eamails
let email = Users.map((User) => {
  return `${User.email}`;
});
console.log(email);
