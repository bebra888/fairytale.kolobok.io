let slides = [
  {
    audio: "/assets/sounds/kol_1.mp3",
    image: "/assets/images/kol_1.jpg",
    number: "1/8",
    background: "url('/assets/images/kol_1 (2).jpg')",
  },
  {
    image: "/assets/images/kol_2.jpg",
    audio: "/assets/sounds/kol_2.mp3",
    number: "2/8",
    background: "url('/assets/images/kol_2 (2).jpg')",
  },
  {
    image: "/assets/images/kol_3.jpg",
    audio: "/assets/sounds/kol_3.mp3",
    number: "3/8",
    background: "url('/assets/images/kol_3 (2).jpg')",
  },
  {
    image: "/assets/images/kol_4.jpg",
    audio: "/assets/sounds/kol_4.mp3",
    number: "4/8",
    background: "url('/assets/images/kol_4 (2).jpg')",
  },
  {
    image: "/assets/images/kol_5.jpg",
    audio: "/assets/sounds/kol_5.mp3",
    number: "5/8",
    background: "url('/assets/images/kol_5 (2).jpg')",
  },
  {
    image: "/assets/images/kol_6.jpg",
    audio: "/assets/sounds/kol_6.mp3",
    number: "6/8",
    background: "url('/assets/images/kol_6 (2).jpg')",
  },
  {
    image: "/assets/images/kol_7.jpg",
    audio: "/assets/sounds/kol_7.mp3",
    number: "7/8",
    background: "url('/assets/images/kol_7 (2).jpg')",
  },
  {
    image: "/assets/images/kol_8.jpg",
    audio: "/assets/sounds/kol_8.mp3",
    number: "8/8",
    background: "url('/assets/images/kol_8 (2).jpg')",
  },
];

let slideIndex = 0;
let currentSlide = slides[slideIndex];

function filledBackground() {
  const background = document.querySelector('body');
  background.style.backgroundImage = slides[slideIndex].background;
}
filledBackground(currentSlide)

function filledNumberText() {
  const text = document.getElementById("number");
  text.innerHTML = slides[slideIndex].number;
}
filledNumberText(currentSlide);

function filledData(s) {
  const kartinka = document.getElementById("slideImage");
  kartinka.src = s.image;
}
filledData(currentSlide);

function onClickNext() {
  const playButton = document.getElementById("play");
  const pause = document.getElementById("pause");
  const audio = document.getElementById("audioblock");
  audio.src = slides[slideIndex].audio;
  audio.play();
  // addLog("onClickNext")
  if (slideIndex + 1 === slides.length) {
    slideIndex = 0;
  } else {
    slideIndex = slideIndex + 1;
  }

  if( pause.style.display = "block"){
    playButton.style.display = "block";
    pause.style.display = "none"
  }
  
  

  filledBackground(slides[slideIndex]);
  filledData(slides[slideIndex]);
  filledAudio(slides[slideIndex]);
  filledNumberText(slides[slideIndex]);
}

function onClickPrevious() {
  // addLog("onClickPrevious")
  if (slideIndex == 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = slideIndex - 1;
  }
  filledBackground(slides[slideIndex]);
  filledData(slides[slideIndex]);
  filledAudio(slides[slideIndex]);
  filledNumberText(slides[slideIndex]);
}

function filledAudio(s) {
  const audio = document.getElementById("audioblock");
  audio.src = s.audio;
  audio.onended = function () {
    onClickNext();
    onClickButtonPlay();
  };
}
filledAudio(currentSlide);

function onClickButtonPlay() {
  // addLog("onClickButtonPlay")

  const playButton = document.getElementById("play");
  const pause = document.getElementById("pause");

  let elem = document.getElementById("audioblock");

  playButton.style.display = "none";
  pause.style.display = "block";
  elem.play();

  for (elem.play(); slideIndex + 1; ) {
    filledAudio();
  }

 
}

// function addLog(log){
//  const logUl = document.getElementById("log");
//  const li = document.createElement("li");
//  li.innerText = log;
//  logUl.appendChild(li);
// }

function onClickButtonPause() {
  // addLog("onClickButtonPause")
  const pause = document.getElementById("pause");
  let elem = document.getElementById("audioblock");
  pause.style.display = "none";
  button.style.display = "block";
  elem.pause();
}

const img = document.getElementById("slideImage");
img.src = slides[slideIndex].image;
const text = document.getElementById("number");
text.innerHTML = slides[slideIndex].number;
const button = document.getElementById("play");
const pause = document.getElementById("pause");
const next = document.getElementById("next");
const next2 = document.getElementById("next2");
const zvuk = document.getElementById("zvuk");
const arrow = document.getElementById("arrow");
const spisok = document.getElementById("spisok");

function imgOnMouseOver() {
  // addLog("imgOnMouseOver")
  img.className = "image";
  button.style.opacity = 1;
  next.style.opacity = 1;
  next2.style.opacity = 1;
  zvuk.style.opacity = 1;
  arrow.style.opacity = 1;
  spisok.style.opacity = 1;
  text.style.opacity = 1;
  pause.style.opacity = 1;
  setTimeout(onHoverImage, 5000);
}

function onHoverImage() {
  // addLog("onHoverImage")
  img.className = "photo-style";
  button.style.opacity = 0;
  pause.style.opacity = 0;
  next.style.opacity = 0;
  next2.style.opacity = 0;
  zvuk.style.opacity = 0;
  arrow.style.opacity = 0;
  spisok.style.opacity = 0;
  text.style.opacity = 0;
}
img.onmousemove = imgOnMouseOver;
