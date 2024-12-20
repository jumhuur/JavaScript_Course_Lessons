let text = "Learning JavaScript is fun!";
console.log(text.includes("fun")); // true
console.log(text.includes("py")); // false
console.log(text.includes("is")); // true

let text1 = "JavaScript is amazing!";
console.log(text1.indexOf("a")); // 1
console.log(text1.indexOf("!")); // 21

let Text2 = "Waxaan ahay araday";
console.log(Text2.lastIndexOf("y")); //  17
// console.log(Text2.indexOf("y")); // 10

let Text3 = "Kani waa Cali";
console.log(Text3.startsWith("H")); // false
console.log(Text3.startsWith("K")); // TRUE

let Phone = "63481819";
console.log(Phone.startsWith("63")); // false

let Email = "jumhuur123@hotmail.com";
console.log(Email.endsWith(".com")); // true
console.log(Email.endsWith(".net")); // false
