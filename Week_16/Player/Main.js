// build
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
// kuwa cusub
const audio = document.createElement("audio");
const width = progressbar.clientWidth;
console.log(width);

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

// track
let soundIndex = 0;
let isplaying = false;
let speed = 1;

// functions

// load sound
const Loadsound = (Sound) => {
  audio.src = Sound.src;
  Cover.src = Sound.Cover;
  AudioTitle.textContent = Sound.Title;
  AudioArt.textContent = Sound.Art;
};

Loadsound(sounds[soundIndex]);

// play sound
const Playsound = (audio) => {
  if (isplaying === false) {
    isplaying = true;
    audio.play();
    Play.innerHTML = `<i class="bx bx-pause"></i>`;
  } else {
    isplaying = false;
    audio.pause();
    Play.innerHTML = `<i class="bx bx-play"></i>`;
  }
};

// next
const nextsound = () => {
  audio.pause();
  isplaying = false;
  setTimeout(() => {
    soundIndex++;
    if (soundIndex > sounds.length - 1) {
      soundIndex = 0;
    }
    Loadsound(sounds[soundIndex]);
    isplaying = true;
    audio.play();
    Play.innerHTML = `<i class="bx bx-pause"></i>`;
  }, 200);
};

// perv
const Pervsound = () => {
  audio.pause();
  isplaying = false;
  setTimeout(() => {
    soundIndex--;
    if (soundIndex < 0) {
      soundIndex = sounds.length - 1;
    }
    Loadsound(sounds[soundIndex]);
    isplaying = true;
    audio.play();
    Play.innerHTML = `<i class="bx bx-pause"></i>`;
  }, 200);
};

const UpdateProg = () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;

  // currentTime minute seconds
  let currentTime_M = Math.floor(currentTime / 60);
  let currentTime_s = Math.floor(currentTime % 60);

  // duration minute seconds
  let duration_m = Math.floor(duration / 60);
  let duration_s = Math.floor(duration % 60);

  // update html
  if (currentTime_M < 10) {
    currentTime_M = `0${currentTime_M}`;
  }

  if (currentTime_s < 10) {
    currentTime_s = `0${currentTime_s}`;
  }

  if (duration_m < 10) {
    duration_m = `0${duration_m}`;
  }

  if (duration_s < 10) {
    duration_s = `0${duration_s}`;
  }

  TimeNow.textContent = `${currentTime_M}:${currentTime_s}`;
  Timeduration.textContent = `${duration_m}:${duration_s}`;

  // percentage
  let percentage = (currentTime / duration) * 100;
  progress.style.width = `${percentage}%`;
};

const SoundEnd = () => {
  nextsound();
};

const changeProgress = (e) => {
  const duration = audio.duration;
  if (isNaN(duration)) {
    return;
  }
  const x = e.offsetX;
  const currentProg = (x / width) * duration;
  audio.currentTime = `${currentProg}`;
};

const Changevolume = (e) => {
  const currentVolume = e.target.value;
  audio.volume = currentVolume;
};

// events
Play.addEventListener("click", () => {
  Playsound(audio);
});

next.addEventListener("click", nextsound);
prev.addEventListener("click", Pervsound);
audio.addEventListener("timeupdate", UpdateProg);
audio.addEventListener("ended", SoundEnd);
progressbar.addEventListener("click", changeProgress);
volume.addEventListener("input", Changevolume);
