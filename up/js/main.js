const burger = document.querySelector('.header__nav--burger');
const links = document.querySelector('.header__nav--links');

burger.addEventListener('click', () => {
  console.log('Clicked');
  links.classList.toggle('header__nav--links_toggle');
});
