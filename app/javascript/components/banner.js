import Typed from 'typed.js';

function loadDynamicBannerText(title) {
  new Typed('#cocktail-title', {
    strings: [title, 'titi'],
    typeSpeed: 50,
    loop: false
  });
}

export { loadDynamicBannerText };
