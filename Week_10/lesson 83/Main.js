// nasted Objects
let UserApp = {
  Name: "Maxamad",
  Price: 453,
  H: "24",
  address: {
    Ethopia: "Jigjiga",
    Somaliland: {
      Address1: "Hargaysa | 200 str",
      Address2: "Burco | Hodan",
    },
  },
};

console.log(UserApp.Name);
console.log(UserApp.Price);
console.log(UserApp.H);
console.log(UserApp.address.Ethopia);
console.log(UserApp.address.Somaliland.Address1);
console.log(UserApp.address.Somaliland.Address2);
