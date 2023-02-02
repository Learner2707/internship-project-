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
let cards = cardsWrapper.getElementsByClassName("testimonial-card");
function next() {
  cardsWrapper.scrollLeft += cards[0].clientWidth+300;
  
  // cardsWrapper.append(cards[0]);
}
function prev() {
  cardsWrapper.scrollLeft -= cards[0].clientWidth+300;
}

// Attempt 3
