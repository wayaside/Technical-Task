/* Smooth Scroll */


const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors){
    anchor.addEventListener('click',
    function(e){
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substring(1)

        document.getElementById(blockID).scrollIntoView ({
            behavior: "smooth",
            block: "start"
        });
    });
};


/* Slider */

$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        speed: 1100,
        easing: 'ease',
        initialSlide: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        draggable: false,
        centerMode: true,
        variableWidth: true,
    });
});

/* Input Mask */

$(document).ready(function() {
    $("#phone").mask("+7 (999) 999-99-99");
});

/* Capitalize from start */

let input = document.querySelector("#name");

input.addEventListener("input", function() {
    this.value = this.value[0].toUpperCase() + this.value.slice(1);
});
