// code
const Cover = document.querySelector(".album-art-image");
const AudioTitle = document.querySelector("div.song-title");
const AudioArt = document.querySelector("div.artist");
const progressbar = document.querySelector(".progress-bar");
const progress = document.querySelector("div.progress");
const TimeNow = document.querySelector("span.TimeNow");
const Timeduration = document.querySelector("span.Timeduration");
const volume = document.querySelector("input#volume");
const prev = document.querySelector("button.prev");
const next = document.querySelector("button.next");
const Play = document.querySelector("button.play-btn");
const audio = document.createElement("audio");
const width = progressbar.clientWidth;

const sounds = [
  {
    src: "/sound/03.mp3",
    Title: "Anta nuurulaah",
    Cover: "/Images/malak03.jpg",
    Art: "Malak Fathi",
  },
  {
    src: "/sound/01.mp3",
    Title: "Ramadan",
    Cover: "/Images/malak01.jpg",
    Art: "Malak Fathi and Fathuum",
  },

  {
    src: "/sound/Sinn.mp3",
    Title: "Siin",
    Cover: "/Images/najaar.jpg",
    Art: "Abdale najar",
  },

  {
    src: "/sound/02.mp3",
    Title: "Dikri",
    Cover: "/Images/malak02.jpg",
    Art: "Malak Fathi",
  },

  {
    src: "/sound/arwax.mp3",
    Title: "mushtaaq",
    Cover: "/Images/kandari.jpg",
    Art: "abdirahmaan kandari",
  },

  {
    src: "/sound/04.mp3",
    Title: "Muhamed",
    Cover: "/Images/malak04.jpg",
    Art: "Malak Fathi",
  },
  {
    src: "/sound/05.mp3",
    Title: "mustafaa",
    Cover: "/Images/malakfat.jpg",
    Art: "Malak Fathi and Fathuum",
  },
  {
    src: "/sound/06.m4a",
    Title: "habibi ya rasuul",
    Cover: "/Images/images.jpg",
    Art: "salah manic yami",
  },
];

// daba Gal
let soundindex = 0;
let isplaying = false;
let speed = 1;

// load sound
const LoadSound = (sound) => {
  audio.src = sound.src;
  Cover.src = sound.Cover;
  AudioTitle.textContent = sound.Title;
  AudioArt.textContent = sound.Art;
};

LoadSound(sounds[soundindex]);

const PlaySound = (audio) => {
  if (isplaying === false) {
    isplaying = true;
    audio.volume = volume.value;
    audio.play();
    if (isplaying) {
      Play.innerHTML = `<i class="bx bx-pause"></i>`;
    }
  } else {
    isplaying = false;
    audio.pause();
    if (!isplaying) {
      Play.innerHTML = `<i class="bx bx-play"></i>`;
    }
  }
};

const UpdateProgress = () => {
  const { currentTime, duration } = audio;
  let durationMinutes = Math.floor(duration / 60);
  let durationSeccond = Math.floor(duration % 60);

  // duration Time
  let currentTimeMinutes = Math.floor(currentTime / 60);
  let currentTimeSeccond = Math.floor(currentTime % 60);
  if (durationMinutes < 10) {
    durationMinutes = `0${durationMinutes}`;
  }
  if (durationSeccond < 10) {
    durationSeccond = `0${durationSeccond}`;
  }

  // current time
  if (currentTimeMinutes < 10) {
    currentTimeMinutes = `0${currentTimeMinutes}`;
  }
  if (currentTimeSeccond < 10) {
    currentTimeSeccond = `0${currentTimeSeccond}`;
  }

  const Percentage = (currentTime / duration) * 100;
  progress.style.width = `${Percentage}%`;
  setTimeout(() => {
    TimeNow.textContent = `${durationMinutes}:${durationSeccond}`;
    Timeduration.textContent = `${currentTimeMinutes}:${currentTimeSeccond}`;
  }, 200);
};

const nextsound = () => {
  audio.pause();
  setTimeout(() => {
    soundindex++;
    if (soundindex > sounds.length - 1) {
      soundindex = 0;
    }
    LoadSound(sounds[soundindex]);
    audio.play();
    Play.innerHTML = `<i class="bx bx-pause"></i>`;
  }, 200);
};

const Prevsound = () => {
  audio.pause();
  setTimeout(() => {
    soundindex--;
    if (soundindex < 0) {
      soundindex = sounds.length - 1;
    }
    LoadSound(sounds[soundindex]);
    audio.play();
    Play.innerHTML = `<i class="bx bx-pause"></i>`;
  }, 200);
};

const setProgres = (e) => {
  const duration = audio.duration;
  if (isNaN(duration)) return;
  const clickx = e.offsetX;
  const currentProgres = (clickx / width) * duration;
  audio.currentTime = `${currentProgres}`;
};

// events
Play.addEventListener("click", () => {
  PlaySound(audio);
});

audio.addEventListener("timeupdate", UpdateProgress);
next.addEventListener("click", nextsound);
prev.addEventListener("click", Prevsound);
progressbar.addEventListener("click", setProgres);

audio.addEventListener("ended", nextsound);

volume.addEventListener("input", (e) => {
  const newvalume = e.target.value;
  audio.volume = newvalume;
});
