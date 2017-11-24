import Typed from 'typed.js';

function loadDynamicBannerText(title) {
  new Typed('#cocktail-title', {
    strings: [title],
    typeSpeed: 100,
    loop: true,
    showCursor: false
  });
}

export { loadDynamicBannerText };
