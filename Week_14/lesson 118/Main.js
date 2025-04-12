// navigator
console.log(window.navigator);
console.log(navigator);

// luuqada
let Userlang = navigator.language;
let Userlangs = navigator.languages;
console.log(Userlang);
console.log(Userlangs);
//  online offline

let isonline = navigator.onLine;
console.log(isonline);
let Useros = navigator.platform;
console.log("os", Useros);

let userBrowser_os = navigator.userAgent;
console.log(userBrowser_os);

let myos = navigator.userAgentData.platform;
console.log(myos);

let MyBrowser = navigator.userAgentData.brands[0];
console.log(MyBrowser.brand);
console.log(MyBrowser.version);
