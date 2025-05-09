// date and time
const datenow = Date.now();
const DateNow = new Date();
console.log(datenow);
console.log(DateNow);

// gettime
console.log(DateNow.getTime());

console.log(DateNow.getFullYear());
// bisha
console.log("bisha", DateNow.getMonth());
// maalinta bisha aan kaga jirno
console.log(DateNow.getDay());

// maalinka aan week-ga kaga jirno
console.log(DateNow.getDate());

// saacada
console.log(DateNow.getHours());
// daqiiqad
console.log(DateNow.getMinutes());
// sikino
console.log(DateNow.getSeconds());
// milisinikin
console.log(DateNow.getMilliseconds());

// Waqtiga ugu dambeeya (target time)
const targetDate = new Date("2025-05-17T23:59:59").getTime();

// Cusboonaysii kasta 1 ilbiriqsi
const timer = setInterval(() => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  // Xisaabi maalmaha, saacadaha, daqiiqadaha iyo ilbiriqsiyada
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);

  // Haddii wakhtigu dhamaado
  if (difference < 0) {
    clearInterval(timer);
    console.log("Waqtigu wuu dhammaaday!");
  }
}, 1000);

console.log("waa maxay waxa dhacayaa");
