const gallerySlider = () => {

    const slide = document.querySelectorAll('.gallery-slider>.slide'),
        dots = document.querySelectorAll('.slider-dots>li');


    let curretSlide = 0,
        interval;

    const play = () => {
        slide.forEach((item, index) => {
            if (index == curretSlide) {
                item.removeAttribute('style');
            } else {
                item.style.display = 'none';
            }
        });

        dots.forEach((item, index) => {
            if (index == curretSlide) {
                item.classList.add('.slick-active');
            } else {
                item.classList.remove('.slick-active');
            }
        });
        if (curretSlide >= 4) {
            curretSlide = 0;
        } else {
            curretSlide++;
        }
    }
    const startPlay = (time = 3000) => {
        interval = setInterval(play, time);
    };
    startPlay();

}




export default gallerySlider;