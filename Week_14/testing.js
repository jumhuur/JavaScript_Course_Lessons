// testing
console.log(window);
isdark = window.matchMedia("(prefers-color-scheme: dark)").matches;
islight = window.matchMedia("(prefers-color-scheme: light)").matches;
console.log(isdark);
console.log(islight);
console.log(navigator.userAgentData.platform);
console.log(window.location.search);
const Prams = new URLSearchParams(location.search);
const typesearch = Prams.get("name");
console.log(typesearch);
// console.log(confirm("ma hubtaa inaad masaxdo"));
// let Username = prompt("qor magacaaga");
// console.log(Username);

// location
const btn = document.querySelector("button");
console.log(navigator.geolocation);
// console.log(navigator.geolocation.getCurrentPosition());
// btn.addEventListener("click", function () {
//   navigator.geolocation.getCurrentPosition(function (location) {
//     const latitude = location.coords.latitude;
//     const longitude = location.coords.longitude;
//     const accuracy = location.coords.accuracy;
//     const speed = location.coords.speed;
//     const altitude = location.coords.altitude;
//     console.log("latitude", latitude);
//     console.log("longitude", longitude);
//     console.log("speed", speed);
//     console.log("accuracy", accuracy);
//     console.log("altitude", altitude);

//     const mapURL = `https://www.google.com/maps?q=${latitude},${longitude}`;
//     window.open(mapURL, "_blank");
//   });
// });

// atob and btoa
const bse64 = "SGVsbG8gV29ybGQh";
console.log(atob(bse64));

const text = "taysiir online";
console.log(btoa(text));
console.log(atob("dGF5c2lpciBvbmxpbmU="));

// crypto passwor hashed and compare
// const storedHash =
//   "5bf5ba56e769a500878fa049dbccb8ec6552c121d01c27d104fefaba76408f3d";
// const correctPassword = prompt("qor password-kaaga");
// console.log(correctPassword);
// async function hashText(text) {
//   const encoder = new TextEncoder();
//   const data = encoder.encode(text);
//   const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
//   const hashArray = Array.from(new Uint8Array(hashBuffer));
//   const hashHex = hashArray
//     .map((b) => b.toString(16).padStart(2, "0"))
//     .join("");
//   return hashHex;
// }

// const check = async () => {
//   const userHash = await hashText(correctPassword);
//   console.log(userHash);
//   if (userHash === storedHash) {
//     console.log("✅ Password sax ah");
//   } else {
//     console.log("❌ Password khaldan");
//   }
// };

// check();

// scroll
let count = 0;
const cabiro = () => {
  console.log("availHeight", screen.availHeight);
  console.log("availWidth", screen.availWidth);
  console.log("height", screen.height);
  console.log("width", screen.width);
};
cabiro();

const div = document.querySelector("div.main_div");
div.addEventListener("scroll", () => {
  const scrollTop = div.scrollTop; // Scroll-ka kore
  const scrollLeft = div.scrollLeft; // Scroll-ka bidix
  const scrollHeight = div.scrollHeight;
  console.log(scrollHeight); // waxaad helaysaa scrollHeight inta uu yahay
  console.log(`Div scrolled to Top: ${scrollTop}, Left: ${scrollLeft}`);
});

// let myWindow;
// function openTaysiir() {
//   window.open("https://taysiir.net", "NoScroll", "width=400,height=550");
//   //setTimeout(() => myWindow.close(), 3000);
//   //myWindow.close();
// }
// openTaysiir();

const Timer = setTimeout(function () {
  console.log("salaan");
}, 3000);
clearTimeout(Timer);
//console.log(Timer);

//interveal
// let TimerCount = 0;
// let interval = setInterval(() => {
//   console.log("count is", TimerCount++);
//   if (TimerCount === 201) {
//     clearInterval(interval);
//   }
// }, 50);

console.log("Ballaca guud ee screen-ka", screen.width); // Ballaca guud ee screen-ka
console.log("Dhererka guud ee screen-ka", screen.height); // Dhererka guud ee screen-ka
console.log("Ballaca la heli karo (browser ka furan yahay)", screen.availWidth); // Ballaca la heli karo (browser ka furan yahay)
console.log("Dhererka la heli karo", screen.availHeight); // Dhererka la heli karo
console.log("Tirada bit-ka ee midabka (e.g. 24)", screen.colorDepth); // Tirada bit-ka ee midabka (e.g. 24)
console.log(
  "Pixel bit depth (badanaa la mid ah colorDepth)",
  screen.pixelDepth
); // Pixel bit depth (badanaa la mid ah colorDepth)

console.log(window.location);
console.log(window.location.href);
console.log(window.location.protocol);
console.log(window.location.port);
console.log(window.location.pathname);

const Location = {
  hash: "",
  host: "127.0.0.1:5501",
  hostname: "127.0.0.1",
  href: "http://127.0.0.1:5501/",
  origin: "http://127.0.0.1:5501",
  pathname: "/",
  port: "5501",
  protocol: "http:",
  search: "",
};
console.log(window.navigator.userAgentData);
console.log(window.navigator.userAgentData.platform);
console.log(window.navigator.userAgentData.brands);
console.log(window.navigator.onLine);

const checkInternet = () => {
  if (navigator.onLine) {
    console.log("Online");
  } else {
    console.log("offline");
  }
};

checkInternet();
console.log(history);
// console.log(window.history.back());
// console.log(window.history.forward());
// console.log(window.history.go(0));

const isMobile = window.matchMedia("(max-width: 768px)");
const Sestem = matchMedia("(prefers-color-scheme: dark)").matches;
console.log(isMobile.matches);
console.log(Sestem);

const mq = window.matchMedia("(max-width: 768px)");

mq.addEventListener("change", (e) => {
  if (e.matches) {
    console.log(e);
    console.log("Screen-ka wuu yaryahay (mobile)");
  } else {
    console.log(e);
    console.log("Screen-ka wuu weyn yahay (desktop)");
  }
});
