
let slides = [];

let slideIndex = 0;
let currentSlide = slides[slideIndex];

function onFairytaleChooseKolobokClick(){
  const menu = document.getElementById('menu')
  const card= document.getElementById('cardKolobok')
  menu.style.display = "none";
  card.style.display = "block";
  slides =  [{
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
  }]
  console.log(slides)

 slideIndex = 0;
 currentSlide = slides[slideIndex];
 filledBackground(currentSlide)
 filledNumberText(currentSlide);
 filledData(currentSlide);
 filledAudio(currentSlide);
}




function onFairytaleChooseMamontClick(){
  const menu = document.getElementById('menu')
  const card= document.getElementById('cardKolobok')
  menu.style.display = "none";
  card.style.display = "block";
  slides = [{
    audio: "/assets/mamontenok/records/0.mp3",
    image: "/assets/mamontenok/images/0.jpg",
    number: "1/17",
    background: "url('/assets/mamontenok/images/0(1).jpg')",
  },
  {
    audio: "/assets/mamontenok/records/1.mp3",
    image: "/assets/mamontenok/images/1.jpg",
    number: "2/17",
    background: "url('/assets/mamontenok/images/1(1).jpg')",
  },{
    audio: "/assets/mamontenok/records/2.mp3",
    image: "/assets/mamontenok/images/2.jpg",
    number: "3/17",
    background: "url('/assets/mamontenok/images/2(1).jpg')",
  },{
    audio: "/assets/mamontenok/records/3.mp3",
    image: "/assets/mamontenok/images/3.jpg",
    number: "4/17",
    background: "url('/assets/mamontenok/images/3(1).jpg')",
  },{
    audio: "/assets/mamontenok/records/4.mp3",
    image: "/assets/mamontenok/images/4.jpg",
    number: "5/17",
    background: "url('/assets/mamontenok/images/4(1).jpg')",
  },{
    audio: "/assets/mamontenok/records/5.mp3",
    image: "/assets/mamontenok/images/5.jpg",
    number: "6/17",
    background: "url('/assets/mamontenok/images/5(1).jpg')",
  },{
    audio: "/assets/mamontenok/records/6.mp3",
    image: "/assets/mamontenok/images/6.jpg",
    number: "7/17",
    background: "url('/assets/mamontenok/images/6(1).jpg')",
  },{
    audio: "/assets/mamontenok/records/7.mp3",
    image: "/assets/mamontenok/images/7.jpg",
    number: "8/17",
    background: "url('/assets/mamontenok/images/7(1).jpg')",
  },{
    audio: "/assets/mamontenok/records/8.mp3",
    image: "/assets/mamontenok/images/8.jpg",
    number: "9/17",
    background: "url('/assets/mamontenok/images/8(1).jpg')",
  },{
    audio: "/assets/mamontenok/records/9.mp3",
    image: "/assets/mamontenok/images/9.jpg",
    number: "10/17",
    background: "url('/assets/mamontenok/images/9(1).jpg')",
  },{
    audio: "/assets/mamontenok/records/10.mp3",
    image: "/assets/mamontenok/images/10.jpg",
    number: "11/17",
    background: "url('/assets/mamontenok/images/10(1).jpg')",
  },{
    audio: "/assets/mamontenok/records/11.mp3",
    image: "/assets/mamontenok/images/11.jpg",
    number: "12/17",
    background: "url('/assets/mamontenok/images/11(1).jpg')",
  },{
    audio: "/assets/mamontenok/records/12.mp3",
    image: "/assets/mamontenok/images/12.jpg",
    number: "13/17",
    background: "url('/assets/mamontenok/images/12(1).jpg')",
  },{
    audio: "/assets/mamontenok/records/13.mp3",
    image: "/assets/mamontenok/images/13.jpg",
    number: "14/17",
    background: "url('/assets/mamontenok/images/13(1).jpg')",
  },{
    audio: "/assets/mamontenok/records/14.mp3",
    image: "/assets/mamontenok/images/14.jpg",
    number: "15/17",
    background: "url('/assets/mamontenok/images/14(1).jpg')",
  },{
    audio: "/assets/mamontenok/records/15.mp3",
    image: "/assets/mamontenok/images/15.jpg",
    number: "16/17",
    background: "url('/assets/mamontenok/images/15(1).jpg')",
  },{
    audio: "/assets/mamontenok/records/16.mp3",
    image: "/assets/mamontenok/images/16.jpg",
    number: "17/17",
    background: "url('/assets/mamontenok/images/16(1).jpg')",
  },]

  console.log(slides)

 slideIndex = 0;
 currentSlide = slides[slideIndex];
 filledBackground(currentSlide)
 filledNumberText(currentSlide);
 filledData(currentSlide);
 filledAudio(currentSlide);

}



function filledBackground() {
  const background = document.querySelector('body')
  background.style.backgroundImage = slides[slideIndex].background;
  
  
}
filledBackground(currentSlide)

function filledNumberText() {
  const text = document.getElementById("number");
  text.innerHTML = slides[slideIndex].number;
}
filledNumberText(currentSlide);

function filledData() {
  const kartinka = document.getElementById("slideImage");
    kartinka.src = slides[slideIndex].image;
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
  const playButton = document.getElementById("play");
  const pause = document.getElementById("pause");
  // addLog("onClickPrevious")
  if (slideIndex == 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = slideIndex - 1;
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

function filledAudio() {
  const audio = document.getElementById("audioblock");
  audio.src = slides[slideIndex].audio;
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

  
}
  

// function addLog(log){
//  const logUl = document.getElementById("log");
//  const li = document.createElement("li");
//  li.innerText = log;
//  logUl.appendChild(li);
// }

function onClickButtonPause() {
  const button = document.getElementById("play");
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

  filledBackground(slides[slideIndex]);
  filledData(slides[slideIndex]);
  filledAudio(slides[slideIndex]);
  filledNumberText(slides[slideIndex]);
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

  filledBackground(slides[slideIndex]);
  filledData(slides[slideIndex]);
  filledAudio(slides[slideIndex]);
  filledNumberText(slides[slideIndex]);
}
img.onmousemove = imgOnMouseOver;
