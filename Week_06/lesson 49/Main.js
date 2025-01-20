//
const mylist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "cismaan"];
// for (let i = 0; i < mylist.length; i++) {
//   //   if (mylist[i] === 5) {
//   //     break;
//   //   }

//   if (typeof mylist[i] === "string") {
//     break;
//   }
//   console.log(mylist[i]);
// }

//Continue
// for (let i = 0; i < mylist.length; i++) {
//   if (mylist[i] === 5) {
//     continue;
//   }
//   console.log(mylist[i]);
// }

let Arry_num = ["A", "B", "C", "D", "E", 123, 1232, 4234, 454, 5656];
for (let i = 0; i < Arry_num.length; i++) {
  if (typeof Arry_num[i] === "number") {
    continue;
  }
  console.log(Arry_num[i]);
}

// label

const Students = ["warda", "xasan", "Maxamad", "Mukhtaar", "Laki"];
let Subjects = ["Mathematics", "Physics", "Biology", "Chemistry"];

mainLoop: for (let i = 0; i < Students.length; i++) {
  console.log(`Arday -- ${Students[i]}`);
  nastedloop: for (let x = 0; x < Subjects.length; x++) {
    if (Subjects[x] === "Biology") {
      break mainLoop;
    }
    console.log(`-- ${Subjects[x]}`);
  }
}
