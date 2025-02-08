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

// Toggle Mobile Menu
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const openBtn = document.querySelector(".open-btn");
  const closeBtn = document.querySelector(".close-btn");

  menu.classList.toggle("active");

  // Toggle visibility of open and close buttons
  if (menu.classList.contains("active")) {
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
  } else {
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".close-btn").style.display = "none";
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const menu = document.getElementById("mobileMenu");
  const menuToggle = document.querySelector(".menu-toggle");

  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.remove("active");
    document.querySelector(".open-btn").style.display = "block";
    document.querySelector(".close-btn").style.display = "none";
  }
});

let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  const menu = document.getElementById("mobileMenu");
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    menu.classList.remove("active");
    document.querySelector(".open-btn").style.display = "block";
    document.querySelector(".close-btn").style.display = "none";
  }
  lastScrollTop = scrollTop;
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownMenu = document.getElementById("dropdownMenu");

  dropdownButton.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (
      !dropdownButton.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.remove("show");
    }
  });
});
function toggleDropdown() {
  var content = document.getElementById("dropdownContent");
  // Toggle visibility
  content.style.display = content.style.display === "flex" ? "none" : "flex";
}
