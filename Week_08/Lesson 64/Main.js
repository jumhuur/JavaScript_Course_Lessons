// More Function Examples

const Reversing = (Word) => {
  let reversedWord = "";
  for (let i = Word.length - 1; i >= 0; i--) {
    reversedWord = reversedWord + Word[i];
    ///console.log(Word[i]);
  }

  return reversedWord;
};

console.log(Reversing("cali"));
console.log(Reversing("Raashid"));
console.log(Reversing("Xamse"));
console.log(Reversing("Maxamad"));

const Xisaabiye = (calaamada, n1, n2) => {
  let Natiijo = 0;
  if (calaamada === "+") {
    Natiijo = n1 + n2;
    return Natiijo;
  } else if (calaamada === "-") {
    Natiijo = n1 - n2;
    return Natiijo;
  } else if (calaamada === "*") {
    Natiijo = n1 * n2;
    return Natiijo;
  } else if (calaamada === "/") {
    Natiijo = n1 !== 0 ? n1 / n2 : "sero waxaba uma qaybsami karo";
    return Natiijo;
  } else {
    return "Calaamad qalada ayaad adeegsatay!";
  }
};

console.log(Xisaabiye("+", 10, 90)); // Output: 100
console.log(Xisaabiye("-", 90, 10)); // Output: 80
console.log(Xisaabiye("*", 5, 2)); // Output: 10
console.log(Xisaabiye("/", 5, 3)); // Output: 1.6666666666666667
console.log(Xisaabiye("/", 0, 3)); // Output: sero waxaba uma qaybsami karo
console.log(Xisaabiye("iskugee", 5, 2)); // Output: Calaamad qalada ayaad adeegsatay!
