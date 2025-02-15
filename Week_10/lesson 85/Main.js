// Example
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

let Filtred = Users.filter((user) => {
  return user.age > 20 && user.gender === "Male";
});

if (Filtred.length > 0) {
  document.write(`<p class="Text">${Filtred.length} Users Found</p>`);
} else {
  document.write(`<p class="Error">No users found</p>`);
}
document.write(`<div class="container">`);

for (let i = 0; i < Filtred.length; i++) {
  // loop
  document.write(`<div class="card">`);
  document.write(`<img src="${Filtred[i].image}" alt="User Image" />`);
  document.write(`<div class="card-content">`);
  // gudaha Card-ka
  document.write(`<h3>${Filtred[i].name}</h3>`);
  document.write(`<p><strong>City:</strong> ${Filtred[i].city}</p>`);
  document.write(`<p><strong>Age:</strong> ${Filtred[i].age}</p>`);

  document.write(`<div class="skills">`);

  // nested loop
  for (let x = 0; x < Filtred[i].skills.length; x++) {
    document.write(`<span class="skill">${Filtred[i].skills[x]}</span>`);
    // document.write(`<span class="skill">React</span>`);
    // document.write(`<span class="skill">Node.js</span>`);
  }
  document.write(`</div>`);
  document.write(`</div>`);

  document.write(`</div>`);
}
document.write(`</div>`);
