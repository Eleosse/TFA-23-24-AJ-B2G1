console.info('Hello world');

const menuBurger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu');

menuBurger.addEventListener('click', function(){
    menu.classList.toggle('menu--open');
})

document.addEventListener('scroll', function() {
    const layers = document.querySelectorAll('.parallax-layer');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    layers.forEach((layer, index) => {
        const depth = index * 0.24; // Change the depth factor as needed
        const movement = -(scrollTop * depth);
        layer.style.transform = `translateY(${movement}px)`;
    });
});
