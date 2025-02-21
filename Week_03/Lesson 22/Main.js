// slice ()
let text = "Apple, Banana, Kiwi,";
console.log(text.slice(0, 5)); // Apple
console.log(text.slice(7, 13)); // Banana
console.log(text.slice(15)); // kiwi
console.log(text.slice()); // Apple, Banana, Kiwi,

console.log(text.slice(-13, -7)); //Banana

//substring()
let text3 = "Apple, Banana, Kiwi";
console.log(text3.substring(7)); // Banana, Kiwi
console.log(text3.substring(0, 5)); // Apple
console.log(text3.substring(-13, -7)); //  <empty string>

// substr()
let text7 = "Apple, Banana, Kiwi";
console.log(text7.substr(0, 5)); // Apple
console.log(text7.substr(7, 6)); // Banana

//trim()
let Name = "    Axmed    ";
console.log(Name);
console.log(Name.trim());
