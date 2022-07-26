const slides = document.querySelectorAll('.slide'),
    btnNext = document.getElementById('btn-next'),
    btnPrev = document.getElementById('btn-prev'),
    dots = document.querySelectorAll('.dot');


let index = 0;

const prepareFunc = (ind) => {
    activeSlide(ind);
    activeDot(ind)
}


const activeSlide = n => {
    console.log(n);

    slides.forEach(slide => {
        slide.classList.remove('active')
    });
    slides[n].classList.add('active');
};

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareFunc(index)
    } else {
        index++;
        prepareFunc(index)
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1
        prepareFunc(index)
    } else {
        index--;
        prepareFunc(index)

    }
}

const activeDot = n => {
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    dots[n].classList.add('active');
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot
        prepareFunc(index);
    })
})

setInterval(nextSlide, 2500)


btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);
dots.addEventListener('click', dotActive);