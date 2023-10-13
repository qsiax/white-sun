const swiper = new Swiper('.gallery__item-wrapper', {
    speed: 600,
    slidesPerView: 3,
    spaceBetween: 50,
    grabCursor: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
