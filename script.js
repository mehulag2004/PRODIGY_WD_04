document.addEventListener("DOMContentLoaded", function() {
    var up = document.getElementById("up");
    function upShow() {
        if (window.scrollY > 180) {
            up.style.display = "flex";
        } else {
            up.style.display = "";
        }
    }
    window.addEventListener("scroll", upShow);

    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 100,
    });

    ScrollReveal().reveal('.home-text,.buttons, .aboutContent-text', { origin: 'left' });
    ScrollReveal().reveal('.main-img, nav', { origin: 'top' });
    ScrollReveal().reveal('#AboutMe, #Projects , #about-img', { origin: 'right' });
    ScrollReveal().reveal('.box', { origin: 'bottom' });

});
