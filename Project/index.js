// Attempt 1
/*
function move(){

// Select all slides
const slides = document.querySelectorAll(".testimonial-card");
console.log(slides);
// loop through slides and set each slides translateX property to index * 100%
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 41}%)`;
});
}

function next(){
    const slides = document.querySelectorAll(".testimonial-card");
const nextSlide = document.querySelector(".next-btn");
let curSlide=0;
// let curSlide = Math.floor((Math.random()) * 10);
console.log(curSlide);
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    // slide.style.transform = `translateX(${-110 * (indx - curSlide)}%)`;
    slide.style.transform = `translateX(${-110}%)`;
    console.log("Next clicked");
  });
});
}
*/

// // Attempt 2
/*
let cardsWrapper = document.getElementById("testimonial-cards-wrapper");
let cards = document.getElementsByClassName("testimonial-card");
let count = 0;
function next() {
  console.log(count);
  cardsWrapper.scrollLeft += cards[0].clientWidth + 30;
  if (count === cards.length - 3) {
    // forwardCount =0;
    document.querySelector(".next-btn").classList.toggle("btn-disabled");
    // document.querySelector(".next-btn").style.disabled="true";
    // document.querySelector(".next-btn").style.backgroundColor="rgba(0,0,0,0.3)";
    // document.querySelector(".next-btn").style.cursor="default";
  }
  if (count >= 1) {
    document.querySelector(".prev-btn").classList.toggle("btn-disabled");
  }

  count <= cards.length-3 ? count++ : "kjhsd";
  // if(forwardCount<=(cards.length-3)){

  //   document.querySelector(".next-btn").classList.toggle("btn-disabled");
  // }

  // document.querySelector(".testimonial-card").style.transition = "all 0.3s ease-in-out";
}
function prev() {
  cardsWrapper.scrollLeft -= cards[0].clientWidth + 30;
  if (count <= cards.length - 3) {
    document.querySelector(".prev-btn").classList.toggle("btn-disabled");
  }
  count >= 1 ? count-- : "jkhsdgf";
  console.log(count);
}
*/

// Attempt 3

/*
const cardsWrapper = document.querySelector(".testimonial-cards-wrapper");
const cards = document.querySelectorAll(".testimonial-card");
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");

counter
let counter = 0;
let size = cards[0].clientWidth;

cardsWrapper.insertAdjacentHTML('afterbegin', cards[cards.length - 1].outerHTML)
cardsWrapper.insertAdjacentHTML('beforeend', cards[0].outerHTML)
const elements = document.querySelectorAll('.testimonial-card');
cards.forEach((element) => {
    // element.classList.add('transition');
    element.style.transform = `translateX(${-size * 1}px)`;
  });

cards.style.transform = `translateX(${-size * 1}px)`;

carousel_slide.style.transform = `translateX(${-size * counter}px)`;

next_btn.addEventListener("click", () => {
  cardsWrapper.style.transition = "all 0.3s ease-in-out";
  counter++;
  move(counter);
  // cardsWrapper.style.transform = `translateX(${-size * (counter+1)}px)`;
  if (counter >= cards.length) {
    // setTimeout(() => {
      reset();

    //   cardsWrapper.style.transition = "none";
    //   cardsWrapper.style.transform = `translateX(${-size}px)`;
    // }, 300);

  }
});

prev_btn.addEventListener("click", () => {
  cardsWrapper.style.transition = "all 0.3s ease-in-out";
  counter--;
  cardsWrapper.style.transform = `translateX(${-size * (counter + 1)}px)`;
  if (counter < 0) {
    setTimeout(() => {
      counter = cards.length - 1;
      cardsWrapper.style.transition = "none";
      cardsWrapper.style.transform = `translateX(${-size * (counter + 1)}px)`;
    }, 300);
  }
});

function move(counter){
  cards.forEach((element) => {
        element.style.transform = `translateX(${(-size * (counter+1))+100}px)`;
      });
}

function reset(){
  cards.forEach((element) => {
    // element.style.transform = `translateX(${size * (counter-1)}px)`;
    element.style.transform = `translateX(3246px)`;
  });
}
*/

// Attempt 4 
// Carousel Final 
let cardsWrapper = document.getElementById("testimonial-cards-wrapper");
let cards = document.getElementsByClassName("testimonial-card");
let gap = document.getElementsByClassName("testimonial-cards-wrapper")[0].style
  .gap;
let nextButton = document.getElementById("next-btn");
let prevButton = document.getElementById("prev-btn");
cardsWrapper.scrollLeft === 0
  ? prevButton.classList.add("disabled-btn")
  : prevButton.classList.remove("disabled-btn");
const next = () => (cardsWrapper.scrollLeft += cards[0].clientWidth + +gap);
const prev = () => (cardsWrapper.scrollLeft -= cards[0].clientWidth + +gap);
cardsWrapper.onscroll = function () {
  let scrolledWidth = cardsWrapper.scrollLeft + cardsWrapper.clientWidth;
  let totalScrollWidth = cardsWrapper.scrollWidth;
  scrolledWidth === totalScrollWidth
    ? nextButton.classList.add("disabled-btn")
    : nextButton.classList.remove("disabled-btn");
  cardsWrapper.scrollLeft === 0
    ? prevButton.classList.add("disabled-btn")
    : prevButton.classList.remove("disabled-btn");
};

//Navbar Menu Mobile
function openMenu() {
  let headerHeight = document.getElementsByClassName("fixed-header")[0].clientHeight;
  let scrolledHeight = window.scrollY;
  let mobileMenu = document.getElementById("navbar-dropdown");

  mobileMenu.classList.toggle("dropdown-visible");
  document.body.classList.toggle("disable-scoll");
  mobileMenu.style.top = `${headerHeight + scrolledHeight - 0.5}px`;
  mobileMenu.style.height = `${window.innerHeight - headerHeight}px`;
  document.getElementById("nav-menu-text").classList.toggle("nav-menu-text-visibility");
  document.getElementById("menu-close-btn").classList.toggle("close-btn-visibility");

}
window.onresize=function(){
  if(document.body.clientWidth>=768){
    document.getElementById("navbar-dropdown").classList.remove("dropdown-visible");
    document.body.classList.remove("disable-scoll");

  document.getElementById("nav-menu-text").classList.remove("nav-menu-text-visibility");
  document.getElementById("menu-close-btn").classList.remove("close-btn-visibility");
  }
}
