// Attempt 1

// function move(){

// // Select all slides
// const slides = document.querySelectorAll(".testimonial-card");
// console.log(slides);
// // loop through slides and set each slides translateX property to index * 100%
// slides.forEach((slide, indx) => {
//   slide.style.transform = `translateX(${indx * 41}%)`;
// });
// }

// function next(){
//     const slides = document.querySelectorAll(".testimonial-card");
// const nextSlide = document.querySelector(".next-btn");
// let curSlide=0;
// // let curSlide = Math.floor((Math.random()) * 10);
// console.log(curSlide);
// let maxSlide = slides.length - 1;

// nextSlide.addEventListener("click", function () {
//   if (curSlide === maxSlide) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }

//   slides.forEach((slide, indx) => {
//     // slide.style.transform = `translateX(${-110 * (indx - curSlide)}%)`;
//     slide.style.transform = `translateX(${-110}%)`;
//     console.log("Next clicked");
//   });
// });
// }

// Attempt 2

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

  count <= cards.length ? count++ : "kjhsd";
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

// Attempt 3
/* carousel */
// const cardsWrapper = document.querySelector(".testimonial-cards-wrapper");
// const cards = document.querySelectorAll(".testimonial-card");
// const prev_btn = document.querySelector(".prev-btn");
// const next_btn = document.querySelector(".next-btn");

// counter
// let counter = 0;
// let size = cards[0].clientWidth;

// cardsWrapper.insertAdjacentHTML('afterbegin', cards[cards.length - 1].outerHTML)
// cardsWrapper.insertAdjacentHTML('beforeend', cards[0].outerHTML)
// const elements = document.querySelectorAll('.testimonial-card');
// cards.forEach((element) => {
//     // element.classList.add('transition');
//     element.style.transform = `translateX(${-size * 1}px)`;
//   });

// cards.style.transform = `translateX(${-size * 1}px)`;

// carousel_slide.style.transform = `translateX(${-size * counter}px)`;

// next_btn.addEventListener("click", () => {
//   cardsWrapper.style.transition = "all 0.3s ease-in-out";
//   counter++;
//   move(counter);
//   // cardsWrapper.style.transform = `translateX(${-size * (counter+1)}px)`;
//   if (counter >= cards.length) {
//     // setTimeout(() => {
//       reset();

//     //   cardsWrapper.style.transition = "none";
//     //   cardsWrapper.style.transform = `translateX(${-size}px)`;
//     // }, 300);

//   }
// });

// prev_btn.addEventListener("click", () => {
//   cardsWrapper.style.transition = "all 0.3s ease-in-out";
//   counter--;
//   cardsWrapper.style.transform = `translateX(${-size * (counter + 1)}px)`;
//   if (counter < 0) {
//     setTimeout(() => {
//       counter = cards.length - 1;
//       cardsWrapper.style.transition = "none";
//       cardsWrapper.style.transform = `translateX(${-size * (counter + 1)}px)`;
//     }, 300);
//   }
// });

// function move(counter){
//   cards.forEach((element) => {
//         element.style.transform = `translateX(${(-size * (counter+1))+100}px)`;
//       });
// }

// function reset(){
//   cards.forEach((element) => {
//     // element.style.transform = `translateX(${size * (counter-1)}px)`;
//     element.style.transform = `translateX(3246px)`;
//   });
// }
