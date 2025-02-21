// Example
const mayobject = {
  name: "yuusuf",
  age: "22",
  Job: "webdesigner",
};

console.log(mayobject.name);
console.log(mayobject.age);
console.log(mayobject.Job);

const Custumers = [
  {
    name: "Maxamuud",
    age: "26",
    Job: "Editor",
  },
  {
    name: "Muuna",
    age: "32",
    Job: "Manager",
  },
  {
    name: "Ilhaan",
    age: "20",
    Job: "Web Designer",
  },
  {
    name: "Najax",
    age: "20",
    Job: "Backend Dev",
  },
];

let mapping = Custumers.map((Customer) => {
  console.log(Customer.name);
  console.log(`---- Job: ${Customer.Job}`);
  console.log(`---- Age: ${Customer.age}`);
});

const perfumes = [
  {
    id: 1,
    name: "Dior Sauvage",
    price: 120,
    inStock: true,
    sizes: ["200ml", "100ml", "50ml"],
    image:
      "https://images.unsplash.com/photo-1698877360256-bc45ef15e072?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Chanel Bleu",
    price: 135,
    inStock: true,
    sizes: ["150ml", "100ml", "50ml"],
    image:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Creed Aventus",
    price: 350,
    inStock: false,
    sizes: ["500ml", "250ml", "100ml"],
    image:
      "https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "YSL La Nuit",
    price: 110,
    inStock: true,
    sizes: ["200ml", "150ml", "100ml"],
    image:
      "https://images.unsplash.com/photo-1716730343293-99658c163d96?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Versace Eros",
    price: 95,
    inStock: false,
    sizes: ["300ml", "150ml", "50ml"],
    image:
      "https://images.unsplash.com/photo-1588680500419-e221b3c15dd6?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Tom Ford Oud Wood",
    price: 250,
    inStock: true,
    sizes: ["200ml", "100ml", "50ml"],
    image:
      "https://images.unsplash.com/photo-1611242956059-53e4c29e6b22?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Gucci Guilty",
    price: 105,
    inStock: true,
    sizes: ["250ml", "125ml", "75ml"],
    image:
      "https://images.unsplash.com/photo-1508771400123-e194ad75c0e3?q=80&w=2004&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Paco Rabanne 1 Million",
    price: 85,
    inStock: true,
    sizes: ["300ml", "200ml", "100ml"],
    image:
      "https://images.unsplash.com/photo-1700473209752-395910c89003?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Armani Code",
    price: 115,
    inStock: false,
    sizes: ["200ml", "150ml", "100ml"],
    image:
      "https://images.unsplash.com/photo-1723391962110-299d412ca046?q=80&w=1964&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Bvlgari Man in Black",
    price: 125,
    inStock: true,
    sizes: ["500ml", "250ml", "100ml"],
    image:
      "https://images.unsplash.com/photo-1725139695447-f75e1b482708?q=80&w=1974&auto=format&fit=crop",
  },
];

if (perfumes.length > 0) {
  document.write(`<p class="Text">${perfumes.length} perfumes Found </p>`);
} else {
  document.write(`<p class="Error">perfumes not Found </p>`);
}

document.write(`<div class="container">`);
for (let i = 0; i < perfumes.length; i++) {
  // loop
  document.write(`<div class="card">`);
  document.write(`<img src="${perfumes[i].image}" alt="User Image" />`);
  document.write(`<div class="card-content">`);
  // gudaha Card-ka
  document.write(`<h3>${perfumes[i].name}</h3>`);
  if (perfumes[i].inStock === true) {
    document.write(`<p class="inStock"><strong>InStock</strong></p>`);
  } else {
    document.write(`<p class="outStock"><strong>Out Stock</strong></p>`);
  }

  document.write(`<p><strong>Price:</strong> $${perfumes[i].price}</p>`);

  document.write(`<div class="skills">`);

  // nested loop
  for (let x = 0; x < perfumes[i].sizes.length; x++) {
    document.write(`<span class="skill">${perfumes[i].sizes[x]}</span>`);
    // document.write(`<span class="skill">React</span>`);
    // document.write(`<span class="skill">Node.js</span>`);
  }
  document.write(`</div>`);
  document.write(`</div>`);
  if (perfumes[i].inStock === false) {
    document.write(`<button class="btnout">Add Cart</button>`);
  } else {
    document.write(`<button>Add Cart</button>`);
  }

  document.write(`</div>`);
}
document.write(`</div>`);
