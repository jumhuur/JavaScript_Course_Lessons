// Window methods
//window.alert("fariin");
//alert("fariin labaad");
const btn = document.querySelector("button.close");

btn.addEventListener("click", () => {
  //alert("fariin ogaysiis ah ayaa kuu taala !");
  //   let suaal = confirm("ma hubtaa inaad masaxdo akoonkaaga ?");
  //   console.log(suaal);
  //   if (suaal === false) {
  //     console.log("lama masixin akoongaaga waad badbaaday !");
  //   }
  //   if (suaal === true) {
  //     console.log("waa la masaxay akoonkaaga by");
  //   }

  let Name = window.prompt("qor magacaaga");
  let mail = prompt("qor emailk-kaaga");
  let Phone = prompt("qoor lanbarkaaga ");
  console.log("Magaca", Name);
  console.log("Email-ka", mail);
  console.log("Lanbarka", Phone);
});
