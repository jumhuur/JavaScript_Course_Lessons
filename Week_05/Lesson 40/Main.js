const Arday = ["xaliimo", "nasriin", "nafiisa", "sihaam", "salma"]; // 0
console.log(Arday.indexOf("salma")); // number index = 4
console.log(Arday.indexOf("xaliimo")); // number index = 0
console.log(Arday.indexOf("nasriin")); // number index = 1
console.log(Arday.indexOf("Muwaahib")); // - 1

let Check =
  Arday.indexOf("sihaam") === -1
    ? "Ardaydan kamid maaha ardayda "
    : `Ardaydan waan kuu hellay Numberkeeduna waa ${
        Arday.indexOf("sihaam") + 1
      }`;

console.log(Check);
