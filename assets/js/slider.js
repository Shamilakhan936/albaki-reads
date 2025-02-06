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
    let swiperContainer = this.closest(".mySwiper");
    let swiperWrapper = swiperContainer.querySelector(".swiper-wrapper");

    if (!swiperWrapper.classList.contains("grid-view")) {
      // Convert to grid view
      let swiperInstance = swiperContainer.swiper;
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
      }

      swiperWrapper.classList.add("grid-view");
      swiperWrapper.style.display = "grid";

      swiperContainer.querySelector(".swiper-button-next").style.display =
        "none";
      swiperContainer.querySelector(".swiper-button-prev").style.display =
        "none";
      swiperContainer.querySelector(".swiper-pagination").style.display =
        "none";

      this.innerHTML = `View less <span class="icon"><img src="./assets/images/iconamoon_arrow-up-2.png" alt=""></span>`;
    } else {
      swiperWrapper.classList.remove("grid-view");
      swiperWrapper.style.display = "flex";

      let swiperInstance = new Swiper(swiperContainer, {
        slidesPerView: 6,
        spaceBetween: 20,
        navigation: {
          nextEl: swiperContainer.querySelector(".swiper-button-next"),
          prevEl: swiperContainer.querySelector(".swiper-button-prev"),
        },
        pagination: {
          el: swiperContainer.querySelector(".swiper-pagination"),
          clickable: true,
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

      swiperContainer.querySelector(".swiper-button-next").style.display =
        "block";
      swiperContainer.querySelector(".swiper-button-prev").style.display =
        "block";
      swiperContainer.querySelector(".swiper-pagination").style.display =
        "block";

      this.innerHTML = `View all <span class="icon"><img src="./assets/images/iconamoon_arrow-up-2.png" alt=""></span>`;
    }
  });
});
