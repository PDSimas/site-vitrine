//// hamburger ////
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));
let images = document.querySelectorAll("#banner img");
let currentImage = 0;

//// banner /////
function changeImage(direction) {
  images[currentImage].style.opacity = "0";
  currentImage += direction;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  } else if (currentImage >= images.length) {
    currentImage = 0;
  }
  images[currentImage].style.opacity = "1";
}

document
  .querySelector("#arrow-left")
  .addEventListener("click", () => changeImage(-1));
document
  .querySelector("#arrow-right")
  .addEventListener("click", () => changeImage(1));

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
