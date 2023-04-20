// Next/previous controls
function plusSlides(n, animationClass) {
  showSlides(slideIndex += n, animationClass);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n, animationClass) {
  let i;
  let slides = document.getElementsByClassName("slides");

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  // Make sure slideIndex is within bounds of the slides array
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  // Apply animation class to slide
  if (animationClass) {
    slides[slideIndex - 1].classList.add(animationClass);
    setTimeout(() => {
      slides[slideIndex - 1].classList.remove(animationClass);
    }, 1000);
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "flex";
}

let slideIndex = 1;
showSlides(slideIndex);