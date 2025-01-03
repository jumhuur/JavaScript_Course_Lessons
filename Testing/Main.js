let Test = "jeclahay luuqadaha js iyo kotlin";
console.log(Test.replace("js", "Python")); // jeclahay luuqadaha Python iyo kotlin
const text = "Magacaygu waa Axmed Magaca Walashayna waa Laki";
const ChangeText = text.replace("Axmed", "Maxamad");
console.log(ChangeText); // Magacaygu waa Maxamad Magaca Walashayna waa Laki

let Test1 = "jeclahay luuqadaha js Waayo js waa luuqad Awood Leh";
console.log(Test1.replaceAll("js", "Kotlin")); // jeclahay luuqadaha Kotlin Waayo Kotlin waa luuqad Awood Leh
const text1 = "Magacaygu waa Axmed Magaca Aabahayna waa  Axmed";
const ChangeText1 = text1.replaceAll("Axmed", "Maxamad");
console.log(ChangeText1); // Magacaygu waa Maxamad Magaca Aabahayna waa  Maxamad

// split

// tusaale 01
const LangNames = "JavaScript And js";
console.log(LangNames.split()); // [ "JavaScript And js" ]

// tusaale 02
const Msg = "Waxaan baranayaa luuqada js gaar ahaan string";
const Splittext = Msg.split("");
console.log(Splittext); // [ "W", "a", "x", "a", "a", "n", " ", "b", "a", "r", … ]

// tusaale 03
const Msg1 = "Waxaan baranayaa luuqada js gaar ahaan string";
const Splittext1 = Msg1.split(" "); // space
console.log(Splittext1); // [ "Waxaan", "baranayaa", "luuqada", "js", "gaar", "ahaan", "string" ]

// tusaale 04
let Myemail = "Jumhuur123@hotmail.com";
let UserName = Myemail.split("@");
console.log(UserName); // [ "Jumhuur123", "hotmail.com" ]

// concat

// tusale 01
let textOne = "Mudane";
let Texttwo = "Geedi";
console.log(textOne.concat(Texttwo)); // MudaneGeedi

// tusaale 02
let NameOne = "Cali";
let Nametwo = "Geedi";
console.log(NameOne.concat(" ", Nametwo)); // Cali Geedi

let Xidig = "*";
console.log(Xidig.repeat(3)); // ***
console.log(Xidig.repeat(10)); // **********
console.log(Xidig.repeat(50)); // **************************************************

let Calamaad = "$";
console.log(Calamaad.repeat(90)); // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// chain  Methods
// tusaale 01
const Views = "55645.99809 Views";
const chain = parseFloat(Views).toFixed(3);
console.log(chain); // 55645.998

// tusaale 02
const Views1 = "55645.99809 Views";
const chain1 = Math.trunc(parseFloat(Views1));
console.log(chain1); // 55645

// tusaale 01
const Stringtext = "Magacagu waa Muuse";
console.log(Stringtext.substring(13).toUpperCase()); // MUUSE

/*
if(shardi) {

    code-ka la fulinayo hadii shardigu dhaboobo ama sax noqdo
}
*/

// let Price = 200;
// let Discount = true;
// let DiscountAmount = 20;
// // waxaa la doonayaa hadii Discount uu yahay true in laga jaro Price-ka Qiimaha Discount-ka
// if (Discount === true) {
//   Price = Price - DiscountAmount;
// }
//console.log(`Totalkaagu waa ${Price}$`);
let name = "Ahmed";
// Haddii magaca uu yahay mid gaaban, fariin gaar ah u soo qor
if (name.length <= 5) {
  console.log(`${name} waa magac gaaban.`);
}

let Price = 100;
let Discount = false;
let DiscountAmount = 20;
let country = "KSA";
let countryDiscount = 45;
// waxaa la doonayaa hadii Discount uu yahay true in laga jaro Price-ka Qiimaha Discount-ka
if (Discount === true) {
  Price = Price - DiscountAmount;
} else if (Price >= 200) {
  Price = Price - DiscountAmount;
} else if (country === "som") {
  Price = Price - countryDiscount;
} else {
  Price = Price - 10;
}
console.log(`Totalkaagu waa ${Price}$`);

const age = 25;
const student = false;

// tusaale 01
if (age < 18) {
  console.log("waan ka xunahay laguuma ogolo inaad adegsato");
} else if (student === true) {
  console.log("Ku soo dhawaaw waa meeshaadi");
} else {
  console.log("Lama Hubo Warkagaa");
}

const Shardi = age > 18 ? "soo dhawaaw" : "Laguuma Ogola";
console.log(Shardi);
const shardTest =
  age < 18
    ? "soo dhawaw"
    : student == true
    ? "Waxad tahay Arday soo dhawaaw"
    : age > 45
    ? "Halkan waxaa loogu tallo gallay dadka yar yar"
    : "Lama Hubo Cidaad Tahay";
console.log(shardTest);

let TotalPrice = 190;
let Student = true;
let discount = true;
let DiscoundAmount = 10;
let studentsDiscount = 25;

if (discount === true) {
  if (Student === true) {
    TotalPrice = TotalPrice - studentsDiscount;
  }
  TotalPrice = TotalPrice - DiscoundAmount;
}

console.log(`Total ${TotalPrice}`);

const Job = "support";
let Mushahar = 450;

if (Job === "developer") {
  console.log(
    `soo dhawaa Waxad tahay ${Job} Mushaharkaagu waa ${Mushahar + 200}`
  );
} else if (Job === "Designer") {
  console.log(
    `soo dhawaa Waxad tahay ${Job} Mushaharkaagu waa ${Mushahar + 100}`
  );
} else if (Job === "Video Editor") {
  console.log(
    `soo dhawaa Waxad tahay ${Job} Mushaharkaagu waa ${Mushahar + 50}`
  );
} else {
  console.log(`soo dhawaa Waxad tahay ${Job} Mushaharkaagu waa ${Mushahar}`);
}

const DaysOfWeek = 10;
switch (DaysOfWeek) {
  case 1:
    console.log(`Maanta waa sabti waxaa lagaa donayaa 2 exercises`);
    break;
  case 2:
    console.log(`Maanta waa Axad waxaa lagaa donayaa 1 exercises`);
    break;
  case 3:
    console.log(`Maanta waa isniin waxaa lagaa donayaa 2 exercises`);
    break;

  case 4:
    console.log(`Maanta waa salaalsa waxaa lagaa donayaa 4 exercises`);
    break;
  default:
    console.log("Maan Aqoonsan Maalikan");
}
