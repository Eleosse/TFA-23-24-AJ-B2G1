console.info('Hello world');

const menuBurger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu');

menuBurger.addEventListener('click', function(){
    menu.classList.toggle('menu--open');
})
