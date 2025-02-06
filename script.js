// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 7,
  spaceBetween: 10,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    200: { slidesPerView: 1, spaceBetween: 10 },
    320: { slidesPerView: 2, spaceBetween: 10 },
    640: { slidesPerView: 3, spaceBetween: 10 },
    860: { slidesPerView: 4, spaceBetween: 15 },
    1100: { slidesPerView: 5, spaceBetween: 20 },
    1250: { slidesPerView: 6, spaceBetween: 10 },
  },
});

// "View All" button functionality
document.querySelectorAll(".view-all").forEach((button) => {
  button.addEventListener("click", function () {
    let swiperWrapper = document.querySelector(".swiper-wrapper");
    let swiperContainer = document.querySelector(".mySwiper");

    // Check if grid mode is already applied
    if (!swiperWrapper.classList.contains("grid-view")) {
      swiper.destroy(true, true);

      swiperWrapper.classList.add("grid-view");
      swiperWrapper.style.display = "grid";
      // swiperWrapper.style.gridTemplateColumns = "repeat(6, 1fr)";

      // Hide Swiper navigation and pagination
      document.querySelector(".swiper-button-next").style.display = "none";
      document.querySelector(".swiper-button-prev").style.display = "none";
      document.querySelector(".swiper-pagination").style.display = "none";

      // Hide Swiper container (optional, if needed)
      swiperContainer.style.overflow = "hidden";
    }
  });
});

// akash
document.addEventListener("DOMContentLoaded", () => {
  const bookCardMain = document.querySelector(".book-card-main");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const dotsContainer = document.querySelector(".dots-container");
  const bookCards = document.querySelectorAll(".book-card");

  const totalDots = 3; // Only 3 dots
  let currentIndex = 0;
  let cardWidth = bookCards[0].offsetWidth + 14; // Including gap

  // Create exactly 3 dots
  function createDots() {
    for (let i = 0; i < totalDots; i++) {
      let dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active"); // First dot is active
      dot.dataset.index = i; // Assign index to each dot
      dotsContainer.appendChild(dot);
    }
  }

  // Function to update active dot
  function updateDots() {
    document
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("active"));
    document.querySelectorAll(".dot")[currentIndex].classList.add("active");
  }

  // Handle button clicks
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalDots - 1; // Loop back
    }
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalDots - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop back
    }
    updateSlider();
  });

  // Handle dot clicks
  dotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dot")) {
      currentIndex = parseInt(e.target.dataset.index);
      updateSlider();
    }
  });

  // Update slider position
  function updateSlider() {
    let scrollAmount = currentIndex * cardWidth;
    bookCardMain.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
    updateDots();
  }

  createDots(); // Initialize 3 dots
});

function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("active");
}
