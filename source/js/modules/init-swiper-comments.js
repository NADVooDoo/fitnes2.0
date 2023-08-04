const getSliderComments = () => {
  if (document.querySelector('.comments__swiper')) {
    return new window.Swiper('.comments__swiper', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 110,

      navigation: {
        nextEl: '.comments__button--next',
        prevEl: '.comments__button--prev',
      },
    });
  }
  return null;
};

export {getSliderComments};
