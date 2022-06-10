let musics = [
  {
    name: "Alone",
    cover: "./img/p1.jpg",
    audio: new Audio("./music/m1.mp3"),
  },
  {
    name: "I'm not alone!",
    cover: "img/p2.jpg",
    audio: new Audio("./music/m2.mp3"),
  },
  {
    name: "Rock for Win!",
    cover: "./img/p3.jpg",
    audio: new Audio("./music/m3.mp3"),
  },
];

let musicTitle = document.querySelector("#title-music");
let timeMusic = document.querySelector("#time-music");
let coverMusic = document.querySelector("#cover-music");
let prevBtn = document.querySelector("#prevBtn");
let playBtn = document.querySelector("#playBtn");
let nextBtn = document.querySelector("#nextBtn");

let currentMusic = 0;
let audio = musics[currentMusic].audio;
musicTitle.innerText = musics[currentMusic].name;
musicTitle.src = musics[currentMusic].cover;

audio.addEventListener("canplay", () => {
  timeMusic.max = audio.duration;
});

audio.addEventListener("timeupdate", () => {
  timeMusic.value = audio.currentTime;
});

timeMusic.addEventListener("input", () => {
  audio.currentTime = timeMusic.value;
  audio.play();
  coverMusic.style.animationPlayState = "running";
});

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    coverMusic.style.animationPlayState = "running";
  } else {
    audio.pause();
    coverMusic.style.animationPlayState = "paused";
  }
});

nextBtn.addEventListener("click", () => {
  console.log(currentMusic);
  ChangeMusic("next");
});

prevBtn.addEventListener("click", () => {
  console.log(currentMusic);
  ChangeMusic("prev");
});

function ChangeMusic(state) {
  audio.pause();
  timeMusic.value = 0;
  audio.currentTime = 0;
  // playBtn.classList.replace("icon-play");
  coverMusic.style.animationPlayState = "paused";
  audio.currentMusic = 0;

  if (state == "next") {
    if (currentMusic == musics.length - 1) {
      currentMusic = 0;
    } else currentMusic += 1;
  }
  if (state == "prev") {
    if (currentMusic == 0) {
      currentMusic = musics.length - 1;
    } else {
      currentMusic -= 1;
    }
  }
  audio = musics[currentMusic].audio;
  musicTitle.innerText = musics[currentMusic].name;
  coverMusic.src = musics[currentMusic].cover;

  audio.addEventListener("canplay", () => {
    timeMusic.max = audio.duration;
  });

  audio.addEventListener("timeupdate", () => {
    timeMusic.value = audio.currentTime;
  });

  audio.play();
  coverMusic.style.animationPlayState = "running";
}
