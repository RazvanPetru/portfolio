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