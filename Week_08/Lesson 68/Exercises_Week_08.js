//Exercise 30
/*
Samaee function Prams ahaan u qaadanaya 3 shay oo kala ah 
-- calaamada (waa inay tahay calaamadaha xisaabta sida iskugaynta iwm )
-- n1 (lanbar waa inuu yahay)
-- n2 (lanbar waa inuu yahay )
== kolba Ha ku xisaabtamo calaamada la siiyay isagoo xisaabta uu qabanayo ku 
salayn doona nooca calaamada la siiyay 
Tusaale Hadii la siiyo + waa inuu labada lanbar isku geeyaa 
== hadii calaamad qaladan oo aan caalamada xisaabta ahayn la siiyo waa inoo sheego inayna ahayn 
calaamad saxa 
=== 0 hadii loo qabiyo tiro waa inuu sheego in 0 aanay waxab u qaybsamin
== shuruudahaaga markaad samaynayso waxaad adeegsanaysaa switch statement 
== Ha noqdo Funtion-kaagu arrow function 
*/
function Xisaabiye(Calaamad, n1, n2) {
  let Result = 0;
  if (typeof Calaamad === "string") {
    switch (Calaamad) {
      case "+":
        Result += n1 + n2;
        return Result;
      case "-":
        Result += n1 - n2;
        return Result;
      case "*":
        Result += n1 * n2;
        return Result;
      case "/":
        Result += n1 !== 0 ? n1 / n2 : `${n1} Waxaba uma Qaybsaman`;
        return Result;
      default:
        return `Waxba ma Xisaabin Karro`;
    }
  } else {
    return "calaamad sax ah mad adeegsan";
  }
}

console.log("-----Exercise 30 --------");
console.log(Xisaabiye("/", 0, 22));
