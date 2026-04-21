// =====================
// Core Variables
// =====================
var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");

// =====================
// Settings Toggle
// =====================
function settingtoggle() {
  document.getElementById("setting-container").classList.toggle("settingactivate");
  document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
  document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

// =====================
// Sound Toggle
// =====================
function playpause() {
  if (document.getElementById("switchforsound").checked === false) {
    audio.pause();
  } else {
    audio.play();
  }
}

// =====================
// Visual Mode (Dark/Light)
// =====================
function visualmode() {
  document.body.classList.toggle("light-mode");
  document.querySelectorAll(".needtobeinvert").forEach(function (e) {
    e.classList.toggle("invertapplied");
  });
}

// =====================
// On Load
// =====================
window.addEventListener("load", function () {
  loader.style.display = "none";
  var hey = document.querySelector(".hey");
  if (hey) hey.classList.add("popup");
});

// =====================
// Hamburger Menu (Mobile)
// =====================
let mobileTogglemenu = document.getElementById("mobiletogglemenu");

function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
  document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
  document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
  document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

function hidemenubyli() {
  document.body.classList.remove("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// =====================
// Active Nav Highlight on Scroll
// =====================
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
const mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  mobilenavLi.forEach((li) => {
    li.classList.remove("activeThismobiletab");
    if (li.classList.contains(current)) {
      li.classList.add("activeThismobiletab");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("activeThistab");
    if (li.classList.contains(current)) {
      li.classList.add("activeThistab");
    }
  });
});

// =====================
// Custom Cursor
// =====================
const cursorOuter = document.querySelector(".cursor-outer");
const cursorInner = document.querySelector(".cursor-inner");

if (cursorOuter && cursorInner) {
  document.addEventListener("mousemove", (e) => {
    cursorOuter.style.left = e.clientX + "px";
    cursorOuter.style.top = e.clientY + "px";
    cursorInner.style.left = e.clientX + "px";
    cursorInner.style.top = e.clientY + "px";
  });

  // Hover effect on interactive elements
  const hoverTargets = document.querySelectorAll("a, button, label, .tech-stack-box, .logo");
  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursorOuter.classList.add("hover");
      cursorInner.classList.add("hover");
    });
    el.addEventListener("mouseleave", () => {
      cursorOuter.classList.remove("hover");
      cursorInner.classList.remove("hover");
    });
  });
}

// =====================
// Back To Top Button
// =====================
let mybutton = document.getElementById("backtotopbutton");

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrolltoTopfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  scrollFunction();
};

// =====================
// Disable Image Right-Click
// =====================
document.addEventListener("contextmenu", function (e) {
  if (e.target.nodeName === "IMG") {
    e.preventDefault();
  }
}, false);

// =====================
// Footer Pupil Eye Tracking
// =====================
let Pupils = document.getElementsByClassName("footer-pupil");
let pupilsArr = Array.from(Pupils);
let pupilStartPoint = -10;
let pupilRangeX = 20;
let pupilRangeY = 15;
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;
let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (e) => {
  currentXPosition = e.clientX - mouseXStartPoint;
  fracXValue = currentXPosition / mouseXRange;
  currentYPosition = e.clientY;
  fracYValue = currentYPosition / mouseYEndPoint;

  let moveX = pupilStartPoint + fracXValue * pupilRangeX;
  let moveY = pupilStartPoint + fracYValue * pupilRangeY;

  pupilsArr.forEach((pupil) => {
    pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
};

const windowResize = () => {
  mouseXEndPoint = window.innerWidth;
  mouseYEndPoint = window.innerHeight;
  mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);

// =====================
// Console Signature
// =====================
console.log(
  "%c Designed and Developed by Catur Sugi ",
  "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white; font-weight:900; font-size:1rem; padding:20px;"
);