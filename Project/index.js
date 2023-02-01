
// function move(){

// // Select all slides
// const slides = document.querySelectorAll(".testimonial-card");
// console.log(slides);
// // loop through slides and set each slides translateX property to index * 100% 
// slides.forEach((slide, indx) => {
//   slide.style.transform = `translateX(${indx * 41}%)`;
// });
// }

function next(){
    const slides = document.querySelectorAll(".testimonial-card");
const nextSlide = document.querySelector(".next-btn");

let curSlide = 0;
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    // slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    slide.style.transform = `translateX(${-100}%)`;
  });
});
}