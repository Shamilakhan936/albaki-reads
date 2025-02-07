function initCarousel(
  bookCardMain,
  prevBtn,
  nextBtn,
  dotsContainer,
  bookCards,
  totalDots
) {
  let currentIndex = 0;
  let cardWidth = bookCards[0].offsetWidth + 14;

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

  function updateSlider() {
    let scrollAmount = currentIndex * cardWidth;
    bookCardMain.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
    updateDots();
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

  createDots();
}

document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".book-card-main");

  carousels.forEach((bookCardMain) => {
    const prevBtn = bookCardMain.querySelector(".prev-btn");
    const nextBtn = bookCardMain.querySelector(".next-btn");
    const dotsContainer = bookCardMain.querySelector(".dots-container");
    const bookCards = bookCardMain.querySelectorAll(".book-card");

    initCarousel(bookCardMain, prevBtn, nextBtn, dotsContainer, bookCards, 3);
  });
});

function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("active");
}
