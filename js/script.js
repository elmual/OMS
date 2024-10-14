var swiper = new Swiper(".slide-content", {
  effect: 'coverflow',
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    Autoplay: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    430: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1050: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    }
  }
});