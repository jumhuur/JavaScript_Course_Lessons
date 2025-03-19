// this
console.log(this.location.href);

// function Node() {
//   console.log(this);
// }

// Node();

const btn = document.querySelector("button");

btn.onclick = () => {
  console.log(this); // globle
};

// const obj = {
//   Name: "taysiir",
//   type: "Website",
//   Totaysiirweb: function () {
//     console.log(this.Name);
//   },
// };

// obj.Totaysiirweb();
