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

// mettre à jour l'image
function updateBanner() {
  const slide = slides[currentSlide];
  bannerImage.src = `assets/images/slideshow/${slide.image}`;
  bannerTagLine.innerHTML = slide.tagLine;
  updateDots();
}

// mettre à jour les dots
function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

rightArrow.addEventListener("click", () => {
  console.log("clic droit");
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0; // repart au début
  }
  console.log("currentSlide:", currentSlide);
  updateBanner();
});

leftArrow.addEventListener("click", () => {
  console.log("clic gauche");
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1; // repart à la fin
  }
  console.log("currentSlide:", currentSlide);
  updateBanner();
});
