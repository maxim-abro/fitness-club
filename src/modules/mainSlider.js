const mainSlider = () => {
    const main = document.querySelector('.main-slider'),
        slides = main.querySelectorAll('.slide');
    let currentSlide = 0;
    console.log(slides);
    setInterval(() => {
        if (currentSlide == 4) {
            slides[currentSlide].style.display = 'none';
            slides[0].removeAttribute('style');
            currentSlide = 0;
        } else {
            slides[currentSlide].style.display = 'none';
            slides[currentSlide + 1].removeAttribute('style');
            currentSlide++;
        }
    }, 4000);


}


export default mainSlider;