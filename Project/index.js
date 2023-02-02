
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


let allCards = document.getElementById("testimonial-cards");
let card = allCards.getElementsByClassName("testimonial-card");
function next(){
    allCards.append(card[0]);
}
function prev(){
    allCards.prepend(card[card.length-1]);
}