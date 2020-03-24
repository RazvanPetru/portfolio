const hamburger = document.querySelector('.lines');
const navLinks = document.querySelector('.nav__links');
const links = document.querySelector('nav__links li');
const items = document.getElementsByClassName('nav__links-item');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');

    navLinks.classList.toggle('open');
});

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('is-active');
    });
}

function scrollSmoothTo(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
}

// GSAP EFFECTS

TweenMax.to('.overlay .overlay__title', 2, {
    delay: .2,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
});

TweenMax.to('.overlay .overlay__desc', 2, {
    delay: .2,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
});

TweenMax.to('.overlay', 1, {
    delay: .7,
    top: '-200%',
    ease: Expo.easeInOut
});