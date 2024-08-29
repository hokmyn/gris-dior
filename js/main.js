const swiperHero = new Swiper('.hero__swiper', {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperAbout = new Swiper(".about__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const trigers = document.querySelectorAll('.accordion__triger');

trigers.forEach(item => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle('accordion__item--active');
  });
});