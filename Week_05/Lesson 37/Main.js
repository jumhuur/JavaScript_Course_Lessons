const Students = ["Cali", "Maxamad", "Warfaa"];
const NewSudents = ["salim", "Ciise", "Liibaan", "carafaad"];
let All = Students.concat(NewSudents, "Qawdhan");
console.log(All);

console.log(All.join()); // Cali,Maxamad,Warfaa,salim,Ciise,Liibaan,carafaad,Qawdhan
console.log(All.join("")); // CaliMaxamadWarfaasalimCiiseLiibaancarafaadQawdhan
console.log(All.join("$"));
console.log(All.join("#"));
console.log(All.join("|"));
console.log(All.join("@"));
console.log(`Tirada Ardayda waa ${All.length}`);
