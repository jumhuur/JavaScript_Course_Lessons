// Exercises Week 07
// Exercise 26
function Info(Name = "none", age = "none") {
  return `Welcome Your Name is ${Name} and Your Age is ${age}`;
}
console.log("-----Exercise 26 --------");
console.log(Info());
// Exercise 27
function GetNameLength(Name) {
  return `Magacagan waa ${Name.length} Xaraf`;
}
console.log("-----Exercise 27 --------");
console.log(GetNameLength("saabiriin"));
// Exercise 28
function getLength(Word) {
  return `Qoraalkan Waa ${Word.split(" ").length} Kalmadood`;
}
console.log("-----Exercise 28 --------");
console.log(getLength("Waxaan ahay araday waxaan dhigtaa js"));

//Exercises Week 08
// Exercise 29
/*
  Samee function Loop-garaynaya Arraygan Numbers-ka ah kadib
  soo daabacay lanbarada oo liis garaysan 
  = Haku Xisaabtamo variable-ka Skipcount oo Lanbarka lagu Qoro Variabl-kaas haka boodo 
  = Tusaale Hadii SkipCount ay tahay 2 Haka booda marka loop-ka la samayno 2 lanabar 
  sidan oo kalena ha noqdo 
  - 1
  Halkan waxaa laga booday laba lanbar oo ah 2 & 3
  - 4 
  Halkan waxaa laga booday laba lanbar oo ah 5 & 6
  - 7 
  */
const Mynumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let SkipCount = 1;
function loopNumbers() {
  for (let i = 0; i < Mynumbers.length; ) {
    console.log(Mynumbers[i]);
    if (SkipCount === 0) {
      i++;
    } else {
      i += SkipCount + 1;
    }
  }
}
console.log("-----Exercise 29 --------");
loopNumbers();
