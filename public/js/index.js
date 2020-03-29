const hamburger = document.querySelector('.lines');
const navLinks = document.querySelector('.nav__links');
const links = document.querySelector('nav__links li');
const items = document.getElementsByClassName('nav__links-item');
const desc = document.getElementsByClassName('container__description');
const btn = document.getElementsByClassName('container__btn');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  navLinks.classList.toggle('open');
});

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    desc[i].classList.toggle('hide');
    let bt = btn[i];

    if (bt.innerHTML === 'Read More') {
      bt.innerHTML = 'Read Less';
    } else {
      bt.innerHTML = 'Read More';
    }

    TweenMax.from('.container__description', 0.5, {
      delay: 0.1,
      opacity: 0,
      ease: Expo.easeInOut
    });

    TweenMax.from('.container__btn', 0.3, {
      delay: 0.1,
      opacity: 0,
      y: 10,
      ease: Expo.easeInOut
    });
  });
}

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
  delay: 0.2,
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut
});

TweenMax.to('.overlay .overlay__desc', 2, {
  delay: 0.2,
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut
});

TweenMax.to('.overlay', 1, {
  delay: 0.7,
  top: '-200%',
  ease: Expo.easeInOut
});
