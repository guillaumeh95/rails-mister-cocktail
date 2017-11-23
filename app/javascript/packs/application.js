/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  const ingredients = card.querySelectorAll("p");
  card.addEventListener("mouseenter", (event) => {
    ingredients.forEach((ingredient) => {
      ingredient.classList.remove("hidden");
    });
    event.currentTarget.classList.add("card-ingredients");
  });
  card.addEventListener("mouseleave", (event) => {
    ingredients.forEach((ingredient) => {
      ingredient.classList.add("hidden");
    });
    event.currentTarget.classList.remove("card-ingredients");
  });
});
