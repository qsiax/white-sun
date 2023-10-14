const swiper = new Swiper('.gallery__item-wrapper', {
    speed: 600,
    spaceBetween: 50,
    grabCursor: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
          slidesPerView: 1,
      },
      700: {
          slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
    }
  }
  });
