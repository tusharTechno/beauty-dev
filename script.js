let swiper = new Swiper(".testimonials-slider", {
  slidesPerView: 2,
  spaceBetween: 10,
  speed: 600,
  grabCursor: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  centeredSlides: false,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 10,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: false,
    },
    1700: {
      slidesPerView: 2.5,
      spaceBetween: 10,
      centeredSlides: false,
    },
  },
});

document.querySelector(".hamburgers").addEventListener("touchstart", () => {
  const ele = document.querySelector(".navlinks");
  ele.classList.toggle("h-[calc(100vh_-_77.95px)]");
  document.body.classList.toggle("overflow-hidden");
  ele.classList.toggle("py-5");
  ele.classList.remove("overflow-hidden");
  ele.classList.add("overflow-y-scroll");
});

document.querySelector(".submenu-toggle").addEventListener("touchstart", () => {
  const ele = document.querySelector(".submenu");
  document
    .querySelector(".submenu-toggle")
    .querySelector("svg")
    .classList.toggle("rotate-180");
  ele.classList.toggle("h-0");
  ele.classList.toggle("opacity-0");
});
