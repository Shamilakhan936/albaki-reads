// akash
document.addEventListener("DOMContentLoaded", () => {
  const bookCardMain = document.querySelector(".book-card-main");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const dotsContainer = document.querySelector(".dots-container");
  const bookCards = document.querySelectorAll(".book-card");

  const totalDots = 3;
  let currentIndex = 0;
  let cardWidth = bookCards[0].offsetWidth + 14;

  // Create exactly 3 dots
  function createDots() {
    for (let i = 0; i < totalDots; i++) {
      let dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.dataset.index = i;
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    document
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("active"));
    document.querySelectorAll(".dot")[currentIndex].classList.add("active");
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalDots - 1;
    }
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalDots - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  });

  dotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dot")) {
      currentIndex = parseInt(e.target.dataset.index);
      updateSlider();
    }
  });

  function updateSlider() {
    let scrollAmount = currentIndex * cardWidth;
    bookCardMain.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
    updateDots();
  }

  createDots();
});

function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("active");
}
