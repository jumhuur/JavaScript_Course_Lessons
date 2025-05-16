// Example get current Day many languages
const date = new Date().getDay();
const userlang = navigator.language;

const Getday = (lang = userlang) => {
  const so = [
    "Axad",
    "Isniin",
    "Salaasa",
    "Arbaca",
    "Khamiis",
    "Jimce",
    "Sabti",
  ];
  const ar = [
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];
  const en = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // shaqo
  if (lang === "so") {
    return `Maanta waa ${so[date]}`;
  } else if (lang === "ar") {
    return `اليوم هو يوم ${ar[date]}`;
  } else if (lang === "en") {
    return `Today is ${en[date]}`;
  } else {
    return ["Qalad", "Error", "خطأ"];
  }
};

console.log(Getday());
