const gallerySlider = () => {

    const slide = document.querySelectorAll('.gallery-slider>.slide'),
        slider = document.querySelector('.gallery-slider'),
        dots = document.querySelectorAll('.slider-dots>li');
    // prev = document.querySelector('.gallery-slider>.prev'),
    // next = document.querySelector('.gallery-slider>.next');
    let curretSlide = 0,
        interval;

    const stopPlay = () => {
        clearInterval(interval);
    }

    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
    };

    const prevDots = (elem, index, itemClass) => {
        elem[index].classList.remove(itemClass);
    }

    const nextDots = (elem, index, itemClass) => {
        elem[index].classList.add(itemClass);
    }

    const nextSlide = (elem, index) => {
        elem[index].removeAttribute('style');
    };

    const play = () => {
        prevSlide(slide, curretSlide);
        prevDots(dots, curretSlide, 'slick-active');
        curretSlide++;
        if (curretSlide >= slide.length) {
            curretSlide = 0;
        }
        nextSlide(slide, curretSlide);
        nextDots(dots, curretSlide, 'slick-active');
    }

    const startPlay = (time = 3000) => {
        interval = setInterval(play, time);
    };

    slider.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        console.dir(target);
        if (!target.matches('.slider-arrow,.dot,span')) {
            return
        }
        prevSlide(slide, curretSlide);
        prevDots(dots, curretSlide, 'slick-active');
        if (target.parentNode.matches('.next')) {
            console.dir(target);
            curretSlide++
        } else if (target.parentNode.matches('.prev')) {
            curretSlide--
        } else if (target.matches('.dot')) {
            dots.forEach((item, index) => {
                if (item === target.parentNode) {
                    curretSlide = index;
                }
            });
        }
        if (curretSlide >= slide.length) {
            curretSlide = 0;
        }
        if (curretSlide < 0) {
            curretSlide = slide.length - 1;
        }
        nextSlide(slide, curretSlide);
        nextDots(dots, curretSlide, 'slick-active');
    });

    slider.addEventListener('mouseover', (event) => {
        if (event.target.matches('.slider-arrow>span') ||
            event.target.matches('.dot')) {
            stopPlay();
        }
    });

    slider.addEventListener('mouseout', (event) => {
        if (event.target.matches('.slider-arrow>span') ||
            event.target.matches('.dot')) {
            startPlay(1500);
        }
    });

    startPlay(1500);
}




export default gallerySlider;