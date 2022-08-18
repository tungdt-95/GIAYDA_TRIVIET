// <!-- Initialize Swiper -->//

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
  });
  // swiper info
  var swiper = new Swiper(".mySwiper_info", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      575: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

  //menu mobile
const hammenu = document.querySelector(".hamburger");
const menumb = document.querySelector(".menu")
const menuactive = () => {
    hammenu.classList.toggle("active");
    menumb.classList.toggle("active");

}
hammenu.addEventListener("click", menuactive)