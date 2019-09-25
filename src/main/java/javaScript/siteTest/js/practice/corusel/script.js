let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');

    if(n > slides.length) {
        slidesIndex = 1;
    } else if(n < 1) {
        slidesIndex = slides.length;
    }
    for (let index = 0; index < slides.length; index++) {
        slides[i].style,display = 'none';
    }
    for (let index = 0; index < dots.length; index++) {
        dots[i].className = dots[i].className.replace('cative', "");
    }
    slides[slidesIndex-1].style.display = "block";
}