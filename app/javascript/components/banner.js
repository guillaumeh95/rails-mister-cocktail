import Typed from 'typed.js';

function loadDynamicBannerText(title) {
  new Typed('#cocktail-title', {
    strings: [title],
    typeSpeed: 100,
    loop: false,
    showCursor: false
  });
}

export { loadDynamicBannerText };
