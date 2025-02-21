// replace()
let Test = "waxaan jeclahay luuqadaha js iyo kotlin";
console.log(Test.replace("js", "python")); // waxaan jeclahay luuqadaha python iyo kotlin
console.log(Test.replace("iyo", "&")); // waxaan jeclahay luuqadaha js & kotlin
console.log(
  Test.replace("waxaan jeclahay luuqadaha js iyo kotlin", "waxaan bartaa js")
);

const text =
  "Magacaygu waa Axmed Magaca aabahyna waa Axmed Walashayna waa Laki";
let change = text.replace("Axmed", "Maxamad");
console.log(change);

let Test1 = "Waxaan jeclahay luuqadaha js Waayo js waa luuqad Awood Leh";
console.log(Test1.replace("js", "Kotlin")); //Waxaan jeclahay luuqadaha Kotlin Waayo js waa luuqad Awood Leh

// replaceAll()
console.log(Test1.replaceAll("js", "Kotlin"));

const text1 = "Magacaygu waa Axmed Magaca Aabahayna waa  Axmed";
const ChangeText1 = text1.replaceAll("Axmed", "Maxamad");
console.log(ChangeText1); // Magacaygu waa Maxamad Magaca Aabahayna waa  Maxamad
