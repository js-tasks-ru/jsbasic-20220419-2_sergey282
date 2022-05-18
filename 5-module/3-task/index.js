function initCarousel() {
  const carouselWrapper = document.querySelector('.carousel__inner');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const sCount = carouselWrapper.querySelectorAll('.carousel__slide').length;
  const sliderWidth = carouselWrapper.offsetWidth;
  let sIndex = 0;

  setArrow(sIndex, arrowRight, arrowLeft, sCount);

  arrowRight.addEventListener('click', () => {
    sIndex += 1;
    carouselWrapper.style.transform = `translateX(-${sIndex * sliderWidth}px)`;
    setArrow(sIndex, arrowRight, arrowLeft, sCount);
  });

  arrowLeft.addEventListener('click', () => {
    sIndex -= 1;
    carouselWrapper.style.transform = `translateX(-${sIndex * sliderWidth}px)`;
    setArrow(sIndex, arrowRight, arrowLeft, sCount);
  });

  function setArrow(sIndex, arrowRight, arrowLeft, sCount) {
    if (sIndex === 0) {
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
    };

    if (sIndex >= sCount - 1) {
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    };
  };
}
