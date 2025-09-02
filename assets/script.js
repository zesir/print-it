const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

console.log(slides);

const bannerImage = document.querySelector("#banner img");
const bannerTagLine = document.getElementById("banner-tagline");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

let currentSlide = 0;

rightArrow.addEventListener("click", () => {
  console.log("clic droit");
  currentSlide++;

  // mettre à jour l'image
  const slide = slides[currentSlide];
  bannerImage.src = `assets/images/slideshow/${slide.image}`;
  bannerTagLine.innerHTML = slide.tagLine;
});

leftArrow.addEventListener("click", () => {
  console.log("clic gauche");
  currentSlide--;

  // mettre à jour l'image
  const slide = slides[currentSlide];
  bannerImage.src = `assets/images/slideshow/${slide.image}`;
  bannerTagLine.innerHTML = slide.tagLine;
});
