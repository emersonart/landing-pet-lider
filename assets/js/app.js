document. addEventListener('DOMContentLoaded',()=>{
  console.log('inited')
  const swiperFalam = new Swiper('.swiper-falam', {
    speed: 400,
    spaceBetween: 100,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true
    },
    loopedSlides: 5,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicMainBullets: 1,
      dynamicBullets: true,
    },
  });
})