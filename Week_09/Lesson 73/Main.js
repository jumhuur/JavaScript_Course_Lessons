// filter vs map

const randomNames = [
  "Ayaan",
  "Khalid",
  "Layla",
  "Mohamed",
  "Fatima",
  "Hassan",
  "Nimco",
  "Ibrahim",
  "Zahra",
  "Salman",
  "Abdirahman",
  "Saida",
  "Mahad",
  "Deqa",
  "Rashid",
  "Hamza",
  "Yasmin",
  "Faisal",
  "Nasra",
  "Ali",
  "Hibo",
  "Abdullahi",
  "Sumaya",
  "Omar",
  "Muna",
];

const filternames = randomNames.filter(function (name) {
  return name.length > 8;
});

console.log(filternames);

const mapingname = randomNames.map(function (name) {
  return name.length > 8;
});

console.log(mapingname);

const xarafo = randomNames.map(function (name) {
  return name.slice(0, 1);
});

console.log(xarafo);

let xarfo1 = randomNames.filter(function (name) {
  return name.slice(0, 1);
});

console.log(xarfo1);
