function moreLess(value) {
  let dots = document.getElementById(`dots-${value}`);
  let moreText = document.getElementById(`more-${value}`);
  let button = document.getElementById(`btn-${value}`);

  if (dots.style.display == "none") {
    dots.style.display = "inline";
    button.innerHTML = "See More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    button.innerHTML = "See Less";
    moreText.style.display = "inline";
  }
}

// function for slider carousel
const slider = () => {
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".nextBtnSlider");
  const prevBtn = document.querySelector(".prevBtnSlider");

  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });

  let counter = 0;
  nextBtn.addEventListener("click", () => {
    counter++;
    carousel();
  });

  prevBtn.addEventListener("click", () => {
    counter--;
    carousel();
  });

  const carousel = () => {
    if (counter < 0) {
      counter = 0;
    }
    if (counter < slides.length - 1) {
      nextBtn.style.display = "block";
    } else {
      nextBtn.style.display = "none";
    }
    if (counter > 0) {
      prevBtn.style.display = "block";
    } else {
      prevBtn.style.display = "none";
    }

    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  };

  prevBtn.style.display = "none";
};

// This function runs when all of the DOM's content (ie. HTML, CSS) loads
window.addEventListener("DOMContentLoaded", (e) => {
  slider();
});
