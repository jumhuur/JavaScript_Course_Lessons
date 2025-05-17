let StudentsData = [
  {
    magac: "Axmed Ali",
    da: 21,
    fasal: "IT",
    guursaday: false,
    xiisaha: ["coding", "football"],
    luqadaha: ["Somali", "English"],
    cinwaan: {
      magaalo: "Hargeisa",
      xaafad: "Ibrahim Koodbuur",
    },
  },
  {
    magac: "Zahra Omar",
    da: 19,
    fasal: "Medicine",
    guursaday: false,
    xiisaha: ["reading", "drawing", "swimming"],
    luqadaha: ["Arabic", "English", "Somali"],
    cinwaan: {
      magaalo: "Mogadishu",
      xaafad: "Hodan",
    },
    buuxisayKoorsada: true,
  },
  {
    magac: "Khalid Yusuf",
    da: 24,
    fasal: "Engineering",
    guursaday: true,
    caruur: 2,
    xiisaha: [],
    luqadaha: ["English"],
    cinwaan: {
      magaalo: "Bosaso",
      xaafad: "Roodhi",
    },
  },
  {
    magac: "Nasra Hassan",
    da: 22,
    fasal: "Computer Science",
    guursaday: false,
    xiisaha: ["gaming", "hiking"],
    luqadaha: [],
    cinwaan: {
      magaalo: "Garowe",
      xaafad: "Hantiwadaag",
    },
    buuxisayKoorsada: null,
  },
  {
    magac: "Yusuf Mohamed",
    da: 20,
    fasal: "Business",
    guursaday: false,
    xiisaha: ["marketing", "networking"],
    luqadaha: ["English", "French"],
    cinwaan: {
      magaalo: "Kismayo",
      xaafad: "Shaqalaha",
    },
  },
  {
    magac: "Ayaan Abdi",
    da: 18,
    fasal: "Law",
    guursaday: false,
    xiisaha: ["debate", "writing"],
    luqadaha: ["Somali"],
    cinwaan: {
      magaalo: "Baidoa",
      xaafad: "Wadajir",
    },
  },
  {
    magac: "Hamza Abdirahman",
    da: 25,
    fasal: "Pharmacy",
    guursaday: true,
    caruur: 1,
    xiisaha: ["research"],
    luqadaha: ["English", "Italian"],
    cinwaan: {
      magaalo: "Berbera",
      xaafad: "Haramcad",
    },
  },
  {
    magac: "Hodan Farah",
    da: 23,
    fasal: "Nursing",
    guursaday: false,
    xiisaha: ["volunteering", "cooking"],
    luqadaha: ["Somali", "English"],
    cinwaan: {
      magaalo: "Jowhar",
      xaafad: "Balcad",
    },
  },
  {
    magac: "Ismail Noor",
    da: 27,
    fasal: "Finance",
    guursaday: true,
    caruur: 3,
    xiisaha: ["investing", "reading"],
    luqadaha: ["Somali", "English"],
    cinwaan: {
      magaalo: "Galkayo",
      xaafad: "Garsoor",
    },
  },
  {
    magac: "Fadumo Jama",
    da: 20,
    fasal: "Education",
    guursaday: false,
    xiisaha: ["teaching", "storytelling"],
    luqadaha: ["Somali", "Arabic"],
    cinwaan: {
      magaalo: "Beledweyne",
      xaafad: "Xaawo Taako",
    },
  },
];
const displayUserdata = (Userdata = []) => {
  if (Userdata.length <= 0) {
    console.log("Waan ka xumay wax data ah maan hellin");
  } else {
    let index = 1;
    for (let User of Userdata) {
      const {
        magac,
        fasal,
        guursaday,
        caruur,
        da,
        cinwaan: { magaalo, xaafad },
        luqadaha: [lang1, lang2],
        xiisaha,
        buuxisayKoorsada,
      } = User;

      console.log(`############# - student ${index} - ############# `);
      console.log(`#-Name : ${magac}`);
      console.log(`#fasal : ${fasal}`);
      console.log(`#-Guursaday : ${guursaday ? "haa" : "Maya"}`);
      if (guursaday === true) {
        console.log(`#-caruur : ${caruur ? caruur : 0}`);
      }

      console.log(`#-da : ${da}`);
      console.log(`#-Ciwaan : ${magaalo}, ${xaafad}`);
      console.log(
        `#-Luuqado : ${lang1 ? lang1 : "unknow"}, ${lang2 ? lang2 : "unknow"}`
      );
      console.log(`#- Xiisaha : ${xiisaha ? xiisaha : "unknown"}`);
      console.log(`#- Qalinjabiyay: ${buuxisayKoorsada ? "Haa" : "Maya"}`);

      index++;
    }
  }
};

displayUserdata(StudentsData);
